module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'assets/images/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'production/assets/images/'
    }]
  }
}
