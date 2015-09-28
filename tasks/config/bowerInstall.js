module.exports = function (grunt) {

  grunt.config.set('bower-install-simple', {

    options: {
      color: true,
      directory: "bower_components"
    },
    "prod": {
      options: {
        production: true
      }
    },
    "dev": {
      options: {
        production: false
      }
    }

  });

  grunt.loadNpmTasks("grunt-bower-install-simple");

};
