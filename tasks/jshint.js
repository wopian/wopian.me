module.exports = {
    options: {
        reporter: require('jshint-stylish'),
        globals: {
            jQuery: true
        },
    },
    beforeconcat: ['src/assets/js/*.js']
}
