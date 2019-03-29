module.exports = function globalTeardown() {
  // Force database to disconnect
  // TODO: Does watermelon DB support this?
  process.exit();
};
