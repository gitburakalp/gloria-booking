let gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify-es').default,
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  size = require('gulp-size'),
  plumber = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps'),
  browserslist = require('browserslist');

const contentCssPath = 'src/Content/css/';
const contentJsPath = 'src/Content/js/';
const contentUIKitJsPath = 'src/Content/Uikit/dist/js/';

const jsDir = './src/js/';

let roots = {
    srcDir: './src/',
    jsDir: './src/js/',
    distDir: './dist/',
    sourceDir: '../sources/',
  },
  sassOptions = {
    outputStyle: 'compressed',
  },
  prefixerOptions = {
    grid: true,
    browsers: ['last 2 versions'],
  },
  jsFiles = [
    contentUIKitJsPath + 'uikit.min.js',
    contentUIKitJsPath + 'uikit-icons.min.js',
    contentJsPath + 'jquery.js',
    jsDir + 'swiper.min.js',
    contentJsPath + 'vendors/jquery-ui.js',
    contentJsPath + 'vendors/jquery.validate.min.js',
    contentJsPath + 'jquery.mask.min.js',
    contentJsPath + 'vendors/jquery.fancybox.min.js',
    contentJsPath + 'picker.js',
    contentJsPath + 'picker.date.js',
    contentJsPath + 'theme.js',
  ],
  cssFiles = [contentCssPath + 'vendors/cvc6xig.css', contentCssPath + 'classic.css', contentCssPath + 'classic.date.css', contentCssPath + 'vendors/jquery.fancybox.min.css', contentCssPath + 'vendors/jquery-ui.css', 'src/Content/Uikit/dist/css/uikit.custom-theme.min.css'];

var functionsBrowserSync = function(done) {
    browserSync.init({
      server: {
        baseDir: roots.srcDir,
      },
    });

    done();
  },
  functionsScripts = function() {
    return gulp
      .src(jsFiles)
      .pipe(
        size({
          gzip: true,
          showFiles: true,
        }),
      )
      .pipe(concat('layout.js'))
      .pipe(gulp.dest(jsDir))
      .pipe(uglify())
      .pipe(
        rename({
          suffix: '.min',
        }),
      )
      .pipe(sourcemaps.write(roots.sourceDir))
      .pipe(gulp.dest(jsDir));
  },
  functionsSass = function() {
    return gulp
      .src(roots.srcDir + 'scss/main.scss')
      .pipe(plumber())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sass(sassOptions))
      .pipe(
        size({
          gzip: true,
          showFiles: true,
        }),
      )
      .pipe(
        autoprefixer({
          grid: true,
        }),
      )
      .pipe(
        rename({
          suffix: '.min',
        }),
      )
      .pipe(sourcemaps.write(roots.sourceDir, { includeContent: false }))
      .pipe(gulp.dest(roots.srcDir + 'css'))
      .pipe(browserSync.stream());
  },
  functionsHtml = function() {
    return gulp.src(roots.srcDir + '**/*.html').pipe(browserSync.stream());
  },
  functionsWatch = function() {
    gulp.watch(roots.srcDir + 'scss/**/*.scss', gulp.series('sass'));
    gulp.watch(roots.srcDir + 'js/*.js', gulp.series('html'));
    gulp.watch(roots.srcDir + '**/*.html', gulp.series('html'));
  },
  functionsGloriasCss = () => {
    return gulp
      .src(cssFiles)
      .pipe(plumber())
      .pipe(
        size({
          gzip: true,
          showFiles: true,
        }),
      )
      .pipe(
        autoprefixer({
          grid: true,
        }),
      )
      .pipe(concat('layout.min.css'))
      .pipe(gulp.dest(roots.srcDir + 'css'));
  };

gulp.task('browser-sync', functionsBrowserSync);
gulp.task('scripts', functionsScripts);
gulp.task('sass', functionsSass);
gulp.task('html', functionsHtml);
gulp.task('watch', functionsWatch);
gulp.task('default', gulp.series('browser-sync', 'html', 'sass', 'watch'));
gulp.task('gloria', functionsGloriasCss);
