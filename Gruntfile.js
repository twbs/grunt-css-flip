/*
 * Gruntfile for grunt-css-flip
 * https://github.com/twbs/grunt-css-flip
 *
 * Copyright (c) 2014 Chris Rebert
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      options: {
        config: '.eslintrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    cssflip: {
      defaultOptions: {
        options: {},
        files: {
          'tmp/default_options.css': 'test/fixtures/example.css'
        }
      },
      customOptions: {
        options: {
          indent: '    '
        },
        files: {
          'tmp/custom_options.css': 'test/fixtures/example.css'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.registerTask('lint', ['eslint']);

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['lint', 'clean', 'cssflip', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', 'test');

};
