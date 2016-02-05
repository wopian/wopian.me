module.exports = {
    options: {
        reporter: require('jshint-stylish'),
        globals: {
            jQuery: true
        },
    },
    ignores: ['src/assets/js/bin/materialize.js'],
    beforeconcat: ['src/assets/js/*.js']
}
