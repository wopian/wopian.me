module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded',
      debugInfo: true
    },
    files: {
      'assets/css/main.css': 'assets/sass/main.scss'
    }
  }
}
