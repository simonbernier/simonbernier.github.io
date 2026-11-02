// Show a footnote's text in a floating box when hovering or focusing its reference number.
(function () {
  const refs = document.querySelectorAll('a.footnote[href^="#fn:"]');
  if (!refs.length) return;

  const box = document.createElement("div");
  box.className = "footnote-popup";
  box.id = "footnote-popup";
  box.setAttribute("role", "tooltip");
  document.body.appendChild(box);
  let hideTimer;

  function show(ref) {
    const note = document.getElementById(decodeURIComponent(ref.hash.slice(1)));
    if (!note) return;
    clearTimeout(hideTimer);

    const content = note.cloneNode(true);
    content.querySelectorAll(".reversefootnote").forEach((a) => a.remove());
    box.innerHTML = content.innerHTML;
    ref.setAttribute("aria-describedby", box.id);

    // measure at the origin so the box isn't squeezed by the right edge, then place it above the number
    box.style.left = "0px";
    box.style.top = "0px";
    const r = ref.getBoundingClientRect();
    const w = box.offsetWidth;
    const h = box.offsetHeight;
    const pageW = document.documentElement.clientWidth;
    const left = Math.max(8, Math.min(r.left + r.width / 2 - w / 2, pageW - w - 8));
    const top = r.top - h - 8 >= 0 ? r.top - h - 8 : r.bottom + 8;
    box.style.left = left + window.scrollX + "px";
    box.style.top = top + window.scrollY + "px";
    box.classList.add("visible");
  }

  function close() {
    box.classList.remove("visible");
    document.querySelectorAll('[aria-describedby="footnote-popup"]').forEach((a) => a.removeAttribute("aria-describedby"));
  }

  function hide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(close, 150);
  }

  refs.forEach((ref) => {
    ref.addEventListener("mouseenter", () => show(ref));
    ref.addEventListener("mouseleave", hide);
    ref.addEventListener("focus", () => show(ref));
    ref.addEventListener("blur", hide);
    ref.addEventListener("click", close);
  });
  // keep the box open while the mouse is over it, so links inside it can be clicked
  box.addEventListener("mouseenter", () => clearTimeout(hideTimer));
  box.addEventListener("mouseleave", hide);
  // park the box once it has faded out: a hidden box left where it was still widens the page
  box.addEventListener("transitionend", (e) => {
    if (e.propertyName === "visibility" && !box.classList.contains("visible")) {
      box.style.left = "0px";
      box.style.top = "0px";
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  // on touch screens, a tap outside the box closes it
  document.addEventListener("pointerdown", (e) => {
    if (!box.contains(e.target) && !e.target.closest("a.footnote")) close();
  });
})();
