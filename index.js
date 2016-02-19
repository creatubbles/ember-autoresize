/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-autoresize',
  included: function (app) {
    //app.options.snippetSearchPaths = ['tests/dummy/app'];
    //app.options.snippetPaths = ['tests/dummy/snippets'];

    this._super.included(app);
    app.import('bower_components/dom-ruler/dist/dom-ruler.amd.js', {
      exports: {
        'dom-ruler': ['default']
      }
    });
  }
};
