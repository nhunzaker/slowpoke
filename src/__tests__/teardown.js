module.exports = function globalTeardown() {
  // Force database to disconnect
  // TODO: Does watermelon DB support this?
  global.process.exit();
};
