module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/css');
  return {
    dir: {
      input: 'src'
    },
    templateFormats: [
      'md',
      'html',
      'njk'
    ],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
  }
}

