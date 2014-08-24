module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        qunit: {
            files: ['Tests.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');;
    grunt.registerTask('default', ['qunit']);
};