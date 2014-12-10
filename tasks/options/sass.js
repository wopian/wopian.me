module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'assets/css/app.css': 'assets/sass/app.scss'
    }
  }
}
