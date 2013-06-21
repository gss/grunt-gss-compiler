/*
 * grunt-gss-compiler
 * http://gridstylesheets.org/docs/grunt/
 *
 * Copyright (c) 2013 Henri Bergius
 * Licensed under the MIT license.
 */
'use strict';

var compiler = require('gss-compiler');

module.exports = function(grunt) {
  grunt.registerMultiTask('gss_compiler', 'Compile GSS files to AST JSON for GSS runtime', function() {
    var options = this.options({
      separator: "\n"
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Compile to GSS rules
      var ast = compiler.compile(src);

      // Write the destination file.
      grunt.file.write(f.dest, JSON.stringify(ast, null, 2) + "\n");

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
