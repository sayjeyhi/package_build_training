const _ = require('lodash');

_.ary()
function chunkWrapper() {
  console.log("From chunk wrapper: ", arguments);
  return _.chunk(arguments);
}


module.exports = chunkWrapper;