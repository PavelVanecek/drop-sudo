/**
 * Will drop root privileges if possible.
 *
 * Usage:
 *   var dropsudo = require("drop-sudo");
 *   dropsudo();
 */

module.exports = function() {

  if (
    process.getuid &&
    process.setuid &&
    // under some circumstances, the SUDO_USER might be undefined
    // e. g. Docker container
    process.env.SUDO_USER &&
    process.getuid() === 0
  ) {
    process.setuid(process.env.SUDO_USER);
  }

}
