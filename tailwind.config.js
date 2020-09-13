module.exports = {
    purge: [
        './components/**/*.js',
        './pages/**/*.js',
        './layout/**/*.js',
        './content/**/*.md',
        './next.config.js'
    ],
    plugins: [require('@tailwindcss/typography')],
    variants: {
        opacity: ['responsive', 'hover', 'focus', 'group-hover']
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    }
};
