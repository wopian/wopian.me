module.exports = {
    dist: {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: {
            'production/index.php': 'index.php'// 'destination': 'source'
        }
    }
}
