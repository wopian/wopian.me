module.exports = {
    options: {
        browsers: ['last 2 versions']
    },
    multiple_files: {
        expand: true,
        flatten: true,
        src: 'src/assets/css/*.css',
        dest: 'dist/assets/css/'
    }
}
