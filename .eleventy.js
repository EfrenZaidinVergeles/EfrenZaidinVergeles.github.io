const now = String(Date.now())

module.exports = (eleventyConfig) => {
    
    eleventyConfig.addWatchTarget('src/static/styles/**/*.css');
    eleventyConfig.addWatchTarget('src/index.njk');
    eleventyConfig.addPassthroughCopy({ "src/static": "static" });
    eleventyConfig.addPassthroughCopy({'./node_modules/alpinejs/dist/cdn.js': './static/js/alpinecdn.js'});
    eleventyConfig.addPassthroughCopy({'./node_modules/@fortawesome/fontawesome-free/css/all.min.css': './static/styles/all.min.css'});
    eleventyConfig.addPassthroughCopy({'./node_modules/@fortawesome/fontawesome-free/webfonts': './static/webfonts'});
    
    eleventyConfig.addShortcode('version', function () {
        return now
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};
