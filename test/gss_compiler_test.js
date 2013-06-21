'use strict';

var grunt = require('grunt');

exports.gss_compiler = {
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/vfl.json');
    var expected = grunt.file.read('test/expected/vfl.json');
    test.equal(actual, expected, 'expect compilation to produce correct AST');

    test.done();
  }
};
