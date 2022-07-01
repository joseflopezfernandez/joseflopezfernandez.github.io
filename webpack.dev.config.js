
const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'app'),
    entry: {
        home: './app.js'
    },
    output: {
        clean: true,
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets/js/')
    }
};
