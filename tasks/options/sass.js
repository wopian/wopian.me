module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'assets/css/main.css': 'assets/sass/main.scss',
      'assets/css/year.css': 'assets/sass/year.scss'
    }
  }
}
