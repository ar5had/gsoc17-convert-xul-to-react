const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');

// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
const BROWSER_SYNC_RELOAD_DELAY = 500;


gulp.task('browser-sync', ['nodemon'], () => {

  browserSync({

    // informs browser-sync to proxy our expressjs app which would run at the following location
    proxy: 'http://localhost:8080',

    // informs browser-sync to use the following port for the proxied app
    port: 8000,

    // open the proxied app in chrome
    browser: ['firefox']
  });
});

gulp.task('nodemon', cb => {

  const started = false;

  return nodemon({
    script: 'server.js',
    watch: '*.js',
    env: { 'NODE_ENV': 'development' }
  }).on('start', () => {
    // to avoid nodemon being started multiple times
    if (!started) {
      cb();
      started = true;
    }
  }).on(`restart`, () => {
    console.log(`App restarted!`)
  });
});

gulp.task('js', () => {
  return gulp.src('src/**/*.js')
});

gulp.task('css', () => {
  return gulp.src('src/**/*.css')
    .pipe(browserSync.reload({ stream: true }));
})

gulp.task('bs-reload', () => {
  browserSync.reload();
});

gulp.task('copy-html-css', () => {
  return gulp.src(["src/**/*.css", "src/**/*.html"], { base: "src/." })
    .pipe(gulp.dest("dist"));
});

gulp.task('default', ['browser-sync'], () => {
  gulp.watch('src/**/*.js', ['js', browserSync.reload]);
  gulp.watch('src/**/*.css', ['css']);
  gulp.watch('src/**/*.html', ['bs-reload']);
});