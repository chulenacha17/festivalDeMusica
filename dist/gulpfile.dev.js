"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.js = js;
exports.css = css;
exports.dev = dev;
exports["default"] = void 0;

var _gulp = require("gulp");

var dartSass = _interopRequireWildcard(require("sass"));

var _gulpSass = _interopRequireDefault(require("gulp-sass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var sass = (0, _gulpSass["default"])(dartSass);

function js(done) {
  (0, _gulp.src)("src/js/app.js").pipe((0, _gulp.dest)("build/js"));
  done();
}

function css(done) {
  (0, _gulp.src)("src/scss/app.scss", {
    sourcemaps: true
  }).pipe(sass().on("error", sass.logError)).pipe((0, _gulp.dest)("build/css", {
    sourcemaps: "."
  }));
  done();
}

function dev() {
  (0, _gulp.watch)("src/scss/**/*.scss", css);
  (0, _gulp.watch)("src/js/**/*.js", js);
}

var _default = (0, _gulp.series)(css, js, dev);

exports["default"] = _default;