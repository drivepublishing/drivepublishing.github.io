module.exports = {
  browserSync: {
    server: {
      baseDir: './'
    }
  },
  babel: {
    modules: 'common'
  },
  plumber: {
    errorHandler: function(err) {
      gutil.beep();
      console.log(err);
      G.notify(err);
      this.emit('end');
    }
  },
  notify: {
    eslint: function(file) {
      if (file.eslint.errorCount === 0) {
        return false;
      }
      let errors = file.eslint.messages.map(function(data) {
        return '(' + data.line + ':' + data.column + ') ' + data.message;
      }).join('\n');

      return file.relative + ' (' + file.eslint.errorCount + ' errors)\n' + errors;
    }
  },
  scss: {
    sourceComments: 'map',
    sourceMap: 'sass',
    outputStyle: 'nested'
  },
  imagemin: {
    progressive: true
  },
  autoprefixer: {
    browsers: [
      '> 1%',
      'last 2 versions',
      'firefox >= 4',
      'safari 7',
      'safari 8',
      'IE 8',
      'IE 9',
      'IE 10',
      'IE 11'
    ],
    cascade: false
  }
};