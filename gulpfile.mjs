import {dest, src, series, watch} from "gulp";
import inject from "gulp-inject";
import rename from "gulp-rename";

function injectManager() {
  let target = src('./index.html');
  let sources = src(['./build/manager/**/*.js', './build/manager/**/*.css'], {read: false});
  return target.pipe(inject(sources, {removeTags: true, ignorePath: '/build'})).pipe(dest('./build/manager'));
}

function injectRam() {
  let target = src('./index.html');
  let sources = src(['./build/ram/**/*.js', './build/ram/**/*.css'], {read: false});
  return target.pipe(inject(sources, {removeTags: true, ignorePath: '/build'})).pipe(dest('./build/ram'));
}

function copyStyles1() {
  return src('./build/ram/scripts/script.css').pipe(rename('styles.css')).pipe(dest('./build/ram/styles'))
}

function copyStyles2() {
  return src('./build/ram/scripts/script.css.map').pipe(rename('styles.css.map')).pipe(dest('./build/ram/styles'))
}

function watchTask() {
  watch('build/manager/scripts/**/*.css', copyStyles1);
  watch('build/ram/scripts/**/*.css', copyStyles2);
}

export const watch1 = watchTask;
export default series(copyStyles1, copyStyles2, injectManager, injectRam,)