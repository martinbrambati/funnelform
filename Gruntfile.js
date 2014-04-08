module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //Coffee
    coffee: {
      compile: {
        files: {
          'src/trackform.js': 'src/trackform.coffee',
          'src/trackform-nojquery.js': 'src/trackform-nojquery.coffee',
        }
      },
    },

    //Minime
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: false,
      },
      my_target: {
        files: {
          'build/<%= pkg.name %>.min.js': ['src/<%= pkg.name %>.js'],
          'build/<%= pkg.name %>-nojquery.min.js': ['src/<%= pkg.name %>-nojquery.js']
        }
      }
    },
    
    //TEST
    qunit: {
      files: ['test/qunit/*.html']
    },

  });

  //Coffee Script generator
  grunt.loadNpmTasks('grunt-contrib-coffee');
  
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  //Load the plugin that run the tests
  grunt.loadNpmTasks('grunt-contrib-qunit');

  // Default task(s).
  grunt.registerTask('default', ['coffee','uglify']);
  
  //Green is ok
  grunt.registerTask('test', ['default','qunit']);

};