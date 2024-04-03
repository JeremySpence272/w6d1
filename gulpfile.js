import gulp from "gulp";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import babelify from "babelify";
import browserify from "browserify";
import browserifyCss from "browserify-css";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";

export function buildReact() {
	return browserify({
		entries: "src/main.jsx",
		extensions: [".js", ".jsx"],
		debug: true,
	})
		.transform(babelify, {
			presets: ["@babel/preset-env", "@babel/preset-react"],
		})
		.transform(browserifyCss, {
			global: true,
			minify: true,
		})
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename({ extname: ".min.js" }))
		.pipe(gulp.dest("dist/"));
}
