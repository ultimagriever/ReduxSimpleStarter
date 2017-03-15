const dotenv = require('dotenv');
dotenv.config({ silent: true, path: __dirname + '/../.env' });

const filter = /^REACT_APP_/i;

module.exports = publicUrl => {
  var keys = Object.keys(process.env)
    .filter(key => filter.test(key));

  var raw = {};

  keys.forEach(key => {
    raw[key] = process.env[key];
  });

  raw.NODE_ENV = process.env.NODE_ENV || 'development';
  var stringified = {
    'process.env': JSON.stringify(raw)
  };

  return { raw, stringified };
}
