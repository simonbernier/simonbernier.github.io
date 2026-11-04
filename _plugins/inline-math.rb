# Lets Markdown use $...$ for inline math.
#
# Kramdown only recognises $$...$$ as math; text between single dollars is parsed
# as Markdown, which turns primes into curly quotes, _x_ into italics, \\ into \,
# and so on. This hook rewrites $...$ to $$...$$ before conversion, so the source
# reads like ordinary LaTeX (and previews correctly in editors) while kramdown
# still protects the math. Fenced code, inline code, existing $$...$$ and \$ are
# left alone. As in Pandoc, the opening $ must be followed by a non-space, the
# closing $ preceded by a non-space and not followed by a digit.
module Jekyll
  module InlineMath
    PATTERN = /
        (^[ \t]*(?:```|~~~)[^\n]*\n.*?^[ \t]*(?:```|~~~)[ \t]*$)  # fenced code
      | (`+)[^`\n].*?\2                                           # inline code
      | \$\$.*?\$\$                                               # $$...$$
      | \\\$                                                      # escaped dollar
      | \$(?=\S)([^$\n]+?)(?<=\S)\$(?!\d)                         # $...$
    /mx

    def self.convert(content)
      content.gsub(PATTERN) { Regexp.last_match(3) ? "$$#{Regexp.last_match(3)}$$" : Regexp.last_match(0) }
    end
  end
end

Jekyll::Hooks.register [:documents, :pages], :pre_render do |doc|
  ext = doc.respond_to?(:extname) ? doc.extname : doc.ext
  markdown = doc.site.find_converter_instance(Jekyll::Converters::Markdown)
  doc.content = Jekyll::InlineMath.convert(doc.content) if markdown.matches(ext)
end
