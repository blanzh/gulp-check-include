# gulp-check-include
Filter files by content

## Usage

```javascript
var gulp = require('gulp');
var filter = require('gulp-check-include');

gulp.src('./src/*.html')
    .pipe(filter("I love this file")
```
Or my use case for optimize render by nunjucks:

```javascript
function WatchHtml(dir, fname) {
    return gulp.src(dir)
        .pipe(gulpif(fname !== undefined, filter(fname)))
        .pipe(njkRender({
            path: 'src/partials'
        }))
        .pipe(gulp.dest('./build'));
}

function watcher(cb) {
    gulp.watch('./src/**/*.njk').on('change', function (file) {
    
        if (file.includes("src\\partials\\")) {
            WatchHtml('./src/*.njk', pth.basename(file));
        } else {
            WatchHtml(file);
        }
        
    });
    cb();
}

```

