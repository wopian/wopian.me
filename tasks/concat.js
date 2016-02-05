module.exports = {
    options: {
        stripBanners: true,
    },
    dist: {
        files: {
            'dist/assets/js/app.js' : [
                'src/assets/js/bin/materialize.js',
                'src/assets/js/bin/init.js'
            ]
        }
    }
}
