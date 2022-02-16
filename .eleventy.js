module.exports = function (eleventyConfig) {

    // Add CSS Support
    eleventyConfig.addPassthroughCopy("./src/css");
    // eleventyConfig.setUseGitIgnore(false);
    // eleventyConfig.addWatchTarget("./src/css");
    // Add image support
    eleventyConfig.addPassthroughCopy("./src/img");
    return {
        dir: {
            input: "src",
        },
    };
};