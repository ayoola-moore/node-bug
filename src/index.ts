#!/usr/bin/env node

const program = require('commander');
const { version } = require('../package.json');

// data
program.version(version, '-v, --version', 'show version');

program.parse(process.argv);
