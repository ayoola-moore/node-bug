#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
// import { version } from '../package.json';
const version = '1.0.0';
// data
commander_1.default.version(version, '-v, --version', 'show version');
commander_1.default.parse(process.argv);
//# sourceMappingURL=index.js.map