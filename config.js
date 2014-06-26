path = require('path');

module.exports = {
 server: {
    distFolder: path.resolve(__dirname, '/public')  // The folder that contains the application files (note that the files are in a different repository) - relative to this file
    , staticBasePath: "/static"
    , port: 3000
  }
};