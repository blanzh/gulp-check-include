'use strict';
const PluginError = require('plugin-error');
const through = require('through2');

module.exports = function (string) {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }
        if (file.isStream()) {
            cb(new PluginError('Streaming not supported'));
            return;
        }
        if (file.contents.toString().includes(string)) {
            this.push(file);
        }
        return cb();
    });

};
