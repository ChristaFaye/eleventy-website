module.exports = function (eleventyConfig) {

    // Add CSS Support
    eleventyConfig.addPassthroughCopy("./src/css");
    // eleventyConfig.setUseGitIgnore(false);
    // eleventyConfig.addWatchTarget("./src/css");
    // Add image support
    eleventyConfig.addPassthroughCopy("./src/img");
    let haml = require("hamljs");
    eleventyConfig.setLibrary("haml", haml);
    return {
        dir: {
            input: "src",
        },
    };
};