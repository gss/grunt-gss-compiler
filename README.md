# grunt-gss-compiler

> Compiles .gss files into AST JSON for running with the [GSS engine](http://gridstylesheets.org/).

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-gss-compiler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-gss-compiler');
```

## The "gss_compiler" task

### Overview
In your project's Gruntfile, add a section named `gss_compiler` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  gss_compiler: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```
### Usage Examples

To compile two GSS rule files into a single AST JSON file to be run with the engine, add the following:

```js
grunt.initConfig({
  gss_compiler: {
    files: {
      'assets/gss.json': ['gss/somefile.gss', 'gss/anotherfile.gss'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
