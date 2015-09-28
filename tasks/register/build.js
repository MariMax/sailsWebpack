module.exports = function (grunt) {
	grunt.registerTask('build', [
		'clean:dev',
		'copy:dev',
    'bower-install-simple:dev',
    'webpack:dev'
	]);
};
