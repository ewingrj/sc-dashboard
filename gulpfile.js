const gulp = require('gulp');
const mergeStream = require('merge-stream');

const PolymerProject = require('polymer-build').PolymerProject;
const project = new PolymerProject(require('./polymer.json'));

gulp.task('default', function() {
  mergeStream(project.sources(), project.dependencies()).
      pipe(project.updateBaseTag('/sc-dashboard/')).
      pipe(gulp.dest('docs/'));
});
