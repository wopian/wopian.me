module.exports = {
    dist: {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: {
            'production/index.php': 'index.php',
            'production/slack.php': 'slack.php'
        }
    }
}
