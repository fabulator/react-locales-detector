module.exports = {
    extends: [
        '@socifi',
        '@socifi/eslint-config/react',
    ],
    plugins: [
        'typescript', // fix for Webstorm, otherwise it does not parse ts files
    ],
};
