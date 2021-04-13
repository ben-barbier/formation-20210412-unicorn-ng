module.exports = {
    extends: ['gitmoji'],
    rules: {
        'type-empty': [0, 'never'],
    },
    ignores: [
        (message) => message.includes('WIP')
    ]
};
