module.exports = {
  dest: {
    css: 'public/dist/css',
    js: 'public/dist/js',
    img: 'public/dist/img'
  },
  scss: {
    src: 'public/build/scss/*.scss',
    watch: 'public/build/scss/**/*.scss',
    filename: 'style.css',
    min: 'style.min.css'
  },
  js: {
    src: [
      'public/build/js/main.js'
    ],
    watch: [
      'public/build/js/**/*.js',
      '!public/build/js/vendor/**/*.js'
    ],
    filename: 'scripts.js',
    min: 'scripts.min.js',
    vendor: {
      src: [
        'public/build/js/vendor/jquery.js',
        'public/build/js/vendor/bootstrap.js'
      ],
      filename: 'vendor.js'
    }
  },
  eslint: {
    src: [
      'public/build/js/**/*.js',
      '!public/build/js/vendor/**/*.js',
      'config/**/*.js',
      'gulpfile.js'
    ]
  },
  img: {
    src: 'public/build/img/**/*'
  }
};