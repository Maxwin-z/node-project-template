import express from 'express';
import webpack from 'webpack';
import path from 'path';

const app = express();
app.use(express.static('web'));

// webpack
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
  res.end('hel');
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'web', 'test-router.html'))
})

app.listen(3000);
