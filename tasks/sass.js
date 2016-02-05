module.exports = {
    dist: {
        options: {
            sourcemap: 'none',
            style: 'compressed',
        },
        files: {
            'src/assets/css/materialize.css': 'src/assets/scss/materialize.scss',
            'src/assets/css/style.css': 'src/assets/scss/style.scss'
        }
    }
}
