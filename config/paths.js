module.exports = {
	scss: {
		src: 'assets/scss/*.scss',
		watch: 'assets/scss/**/*.scss',
		dest: 'dist/css',
		filename: 'scss.css'
	},
	css: {
		vendor: {
			src: [
			'assets/css/vendor/bootstrap.css',
			'assets/css/vendor/font-awesome.css',
			'assets/css/vendor/animate.css'
			],
			dest: 'dist/css',
			filename: 'vendor.css'
		}
	},
	js: {
		vendor: {
			src: [
				'assets/js/vendor/jquery.js',
				'assets/js/vendor/bootstrap.js',
				'assets/js/vendor/wow.js'
			],
			dest: 'dist/js',
			filename: 'vendor.js'
		},
		src: [
			'assets/js/main.js'
		],
		watch: [
			'assets/js/**/*.js',
			'!assets/js/vendor/**/*.js'
		],
		dest: 'dist/js',
		filename: 'scripts.js'
	},
	jshint: {
		src: [
			'assets/js/**/*.js',
			'!assets/js/vendor/**/*.js',
			'config/**/*.js',
			'gulpfile.js'
		],
		watch: [
			'assets/js/**/*.js',
			'!assets/js/vendor/**/*.js',
			'config/**/*.js',
			'gulpfile.js'
		]
	},
	img: {
		src: 'assets/img/**/*',
		dest: 'dist/img'
	}
};