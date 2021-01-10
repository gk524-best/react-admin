module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    edge: '17',
                    firefox: '60',
                    chrome: '67',
                    safari: '11.1',
                },
            },
        ],
        [
            '@babel/preset-react',
            {
                development: process.env.BABEL_ENV === 'development',
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-modules-commonjs', [
            '@babel/plugin-transform-runtime',
            {
                corejs: 3,
            },
        ],
        '@babel/plugin-proposal-class-properties',
        'macros'
    ],
};