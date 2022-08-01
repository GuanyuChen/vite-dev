#!/usr/bin/env node

import viteDev from "../index.js";
import { program } from "commander";

program.version("0.0.1");

program.option("-r, --root <type>", "static files root").parse(process.argv);

const options = program.opts();

viteDev(options);
