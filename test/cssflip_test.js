'use strict';

var grunt = require('grunt');

exports.cssflip = {
  defaultOptions: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options.css');
    var expected = grunt.file.read('test/expected/default_options.css');
    test.equal(actual, expected, 'should flip the CSS.');

    test.done();
  },
  customOptions: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_options.css');
    var expected = grunt.file.read('test/expected/custom_options.css');
    test.equal(actual, expected, 'should flip the CSS while honoring the custom indentation specified in the options.');

    test.done();
  }
};
