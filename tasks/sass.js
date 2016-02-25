module.exports = {
    dist: {
        options: {
            sourcemap: 'none',
            style: 'compressed',
        },
        files: {
            'src/assets/css/materialize.css': 'src/assets/scss/base.scss'
        }
    }
}
