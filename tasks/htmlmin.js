module.exports = {
    dist: {
        options: {
            removeComments: true,
            collapseWhitespace: true,
        },
        files: {
            'dist/index.php': 'src/index.php',
            'dist/tos.php': 'src/tos.php'
        }
    }
}
