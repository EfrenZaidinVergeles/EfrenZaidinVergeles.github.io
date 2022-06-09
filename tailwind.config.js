module.exports = {
    mode: 'jit',
    content: ['src/**/*.{njk,md,html}'],
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
