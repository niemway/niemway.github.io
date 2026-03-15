module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md").sort((a, b) => {
      return b.data.year - a.data.year || b.data.month_id - a.data.month_id;
    });
  });
  eleventyConfig.addFilter("projectData", function (projects) {
    return projects.map((p) => ({
      title: p.data.title,
      month: p.data.month,
      month_id: p.data.month_id,
      year: p.data.year,
      tech: p.data.tech,
      image: p.data.image,
      link: p.data.link,
    }));
  });
  // Copy static assets directly to the output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/static");

  return {
    dir: {
      input: "src",
      output: "_site", // where the built site goes
      includes: "_includes",
      layouts: "layouts",
    },
  };
};
