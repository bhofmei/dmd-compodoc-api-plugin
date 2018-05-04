var util = require('util')
exports.apiExamples = function(options) {
  if (this.examples) {
    return this.examples.reduce(function (prev, example) {
      var lines = example.split(/\r\n|\r|\n/)

      /* Process <caption> and update example */
      var matches = lines[0].match(/\s*<caption>(.*?)<\/caption>\s*/)
      var caption;
      if (matches) {
        caption = matches[1]
        lines = lines.slice(1)
      }
      
      /* get paragraph */
      matches = lines[0].match(/\s*<p>(.*?)<\/p>\s*/)
      var paragraph;
      if (matches) {
        paragraph = matches[1]
        example = lines.slice(1).join('\n')
      } else {
        example = lines.join('\n')
      }

      example = util.format('<pre><code>%s</code></pre>', example ? example + '\n' : '');

      return prev + options.fn({caption: caption, example: example, paragraph: paragraph})
    }, '')
  }
}