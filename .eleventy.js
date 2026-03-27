module.exports = function(eleventyConfig) {
  // Pass through assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
