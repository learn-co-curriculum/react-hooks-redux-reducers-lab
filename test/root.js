global.expect = require('expect');

const jsdom = require('jsdom');
const path = require('path');

before(function(done) {
  const src = path.resolve(__dirname, '..', './test/index-test.js');
  const babelResult = require('babel-core').transformFileSync(src, {
    presets: ['env', 'stage-1']
  });
  const html = path.resolve(__dirname, '..', 'index.html');

  jsdom.env(html, [], {
    src: babelResult.code
  }, (err, window) => {
    if (err) {
      return done(err);
    }

    return done();
  });
});
