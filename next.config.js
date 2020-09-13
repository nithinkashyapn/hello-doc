const marked = require('marked');
const prism = require('prismjs');

marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    langPrefix: 'language-',
    highlight: function (code, lang) {
        if (prism.languages[lang]) {
            return prism.highlight(code, prism.languages[lang], lang);
        } else {
            return code;
        }
    }
});

const renderer = new marked.Renderer();

module.exports = {
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/docs/getting-started',
    //             permanent: true
    //         }
    //     ];
    // },
    webpack: function (config, { isServer }) {
        if (!isServer) {
            config.node = {
                fs: 'empty'
            };
        }
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/
            },
            use: ['@svgr/webpack']
        });
        config.module.rules.push({
            test: /\.md$/,
            use: [
                {
                    loader: 'html-loader'
                },
                {
                    loader: 'markdown-loader',
                    options: {
                        renderer
                    }
                }
            ]
        });

        return config;
    }
};
