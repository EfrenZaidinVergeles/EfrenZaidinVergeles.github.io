module.exports = {
    content: ['src/**/*.{njk,md}'],
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    "primary": "pink",
                    "base-100": "white",
                    "primary-focus": "mediumblue",
                },
            },
        ],
    },
};
