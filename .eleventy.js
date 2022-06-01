const now = String(Date.now())
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = (eleventyConfig) => {
    eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
        postcss([tailwindcss(require('./tailwind.config.js')), autoprefixer()])
            .process(cssCode)
            .then(
                (r) => done(null, r.css),
                (e) => done(e, null)
            );
    });
    eleventyConfig.addWatchTarget('src/static/styles/**/*.css');
    eleventyConfig.addWatchTarget('src/index.njk');
    eleventyConfig.addPassthroughCopy({ "src/static": "static" });
    eleventyConfig.addPassthroughCopy({
        './node_modules/alpinejs/dist/cdn.js': './static/js/alpinecdn.js',
    });
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
