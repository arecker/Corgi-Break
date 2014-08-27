"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    banner: "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - " +
      "<%= grunt.template.today('yyyy-mm-dd') %>\n" +
      "<%= pkg.homepage ? '* ' + pkg.homepage + '\\n' : '' %>" +
      "* Copyright (c) <%= grunt.template.today('yyyy') %> <%= pkg.author.name %>;" +
      " Licensed <%= _.pluck(pkg.licenses, 'type').join(', ') %> */\n",
    qunit: {
	options: {
	    timeout: 30000,
	    "--web-security": "no",
	    coverage: {
		src: [ "js/tests.js" ],
		instrumentedFiles: "temp/",
		htmlReport: "build/report/coverage",
		lcovReport: "build/report/lcov",
		linesThresholdPct: 0
		}
	    },
	files: ["Tests.html"]
    },
    coveralls: {
	options: {
	    

	    // dont fail if coveralls fails
	    force: true
	    },
	main_target: {
	    src: "build/report/lcov/lcov.info"
	    }
	},
    watch: {
      gruntfile: {
        files: "<%= jshint.gruntfile.src %>",
        tasks: ["jshint:gruntfile"]
      },
      src: {
        files: "<%= jshint.src.src %>",
        tasks: ["jshint:src", "qunit"]
      },
      test: {
        files: "<%= jshint.test.src %>",
        tasks: ["jshint:test", "qunit"]
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-coveralls");
  grunt.loadNpmTasks("grunt-qunit-istanbul");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task.
  grunt.registerTask("default", ["qunit"]);

};
