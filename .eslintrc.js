module.exports = {
    extends: [
        '@socifi',
        '@socifi/eslint-config/react',
    ],
    rules: {
        'react/require-default-props': 0,
    },
    settings: {
        polyfills: [
            'fetch',
            'promises',
        ],
    },
};
