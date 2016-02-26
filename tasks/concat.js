module.exports = {
    options: {
        stripBanners: true,
    },
    dist: {
        files: {
            'dist/assets/js/app.js' : [
                'src/assets/js/vendor/materialize.js',
                'src/assets/js/vendor/instantclick.min.js',
                'src/assets/js/init.js'
            ]
        }
    }
}
