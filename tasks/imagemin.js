module.exports = {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'src/assets/images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/assets/images/'
        }]
    }
}
