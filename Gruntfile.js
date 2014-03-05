/*
 * Gruntfile for grunt-css-flip
 * https://github.com/twbs/grunt-css-flip
 *
 * Copyright (c) 2014 Chris Rebert
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    css_flip: {
      default_options: {
        options: {},
        files: {
          'tmp/default_options.css': 'test/fixtures/example.css'
        }
      },
      custom_options: {
        options: {
          indent: '    '
        },
        files: {
          'tmp/custom_options.css': 'test/fixtures/example.css'
        }
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'css_flip', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
