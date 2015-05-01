# drop-sudo
npm package that drops root privileges

Use when you wish to release the privileges you no longer need.

## Installation

    npm install drop-sudo

## Example usage

    var http = require("http");
    var dropsudo = require("drop-sudo");

    // this call requires root privileges
    http.createServer().listen(80, function() {
      // root privileges not needed anymore
      dropsudo();
    })
