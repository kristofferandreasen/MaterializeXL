module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  cssmin: {
    compress: {
        files: {
            'dist/MaterializeXL.min.css': ['MaterializeXL.css'],
        },
    },
  },
  watch: {
  scripts: {
    files: ['MaterializeXL.css'],
    tasks: ['cssmin'],
    options: {
      spawn: false,
    },
  },
},
}); 

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task definitions
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('min', ['cssmin']);
};