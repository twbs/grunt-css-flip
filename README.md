# grunt-css-flip
[![NPM version](https://badge.fury.io/js/grunt-css-flip.png)](http://badge.fury.io/js/grunt-css-flip)
[![Dependency Status](https://david-dm.org/twbs/grunt-css-flip.png?theme=shields.io)](https://david-dm.org/twbs/grunt-css-flip)
[![devDependency Status](https://david-dm.org/twbs/grunt-css-flip/dev-status.png?theme=shields.io)](https://david-dm.org/twbs/grunt-css-flip#info=devDependencies)

> Grunt plugin for [Twitter's css-flip](https://github.com/twitter/css-flip)

## Getting Started

This plugin requires Grunt `~0.4.3`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-flip --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-flip');
```

## The "cssflip" task

### Overview
In your project's Gruntfile, add a section named `cssflip` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssflip: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
});
```

### Options

All options are passed directly to css-flip's `flip()` function.
None of the options are required.

#### options.compress
Type: `Boolean`
Default value: `false`

Whether to slightly compress output. Some newlines and indentation are removed. Comments stay intact.

#### options.indent
Type: `String`
Default value: `'  '` (two spaces)

String value to use for 1 level of indentation in the output.

### Usage Examples

#### Default Options
In this example, two CSS files are flipped using css-flip's default settings.

```js
grunt.initConfig({
  cssflip: {
    options: {},
    files: {
      'flipped-one.css': 'original-one.css',
      'flipped-two.css': 'original-two.css'
    }
  }
});
```

#### Custom Options
In this example, the resulting flipped CSS files will also be slightly compressed using css-flip's `compress` option.

```js
grunt.initConfig({
  cssflip: {
    options: {
      compress: true
    },
    files: {
      'flipped-one.min.css': 'original-one.css',
      'flipped-two.min.css': 'original-two.css'
    }
  }
});
```

## Contributing
The project's coding style is laid out in the JSHint and JSCS configurations. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License and copyright

Released under the MIT license. Copyright Chris Rebert 2014.

## Release History
* v0.2.0 (2014-03-12): Fix/address all outstanding issues. **Backwards-incompatible**.
  * **Changed name of task from `css_flip` to `cssflip`.**
  * **Bumped Grunt dependency to v0.4.3.**
  * Bumped & tightened-up devDependencies.
* v0.1.0 (2014-03-06): Initial public release.
