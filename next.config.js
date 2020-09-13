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

renderer.heading = (text, level) => {
    if (level === 1) {
        return `<h1>${text}</h1>`;
    }

    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

    return `
      <h${level} class="group">
        <span class="subnav-anchor" id="${escapedText}"></span>
        ${text}
        <a class="anchor-link" href="#${escapedText}">
          <span class="group-hover:opacity-100 opacity-0 text-gray-600" aria-hidden="true">#</span>
        </a>
      </h${level}>`;
};

module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/docs/getting-started',
                permanent: true
            }
        ];
    },
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
