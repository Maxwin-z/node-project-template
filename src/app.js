import express from 'express';

const app = express();

app.use(express.static('web'));

// webpack
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

//! webpack

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
