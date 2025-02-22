#!/usr/bin/env node
// bin/index.js
import { program } from "commander";
import init from "../src/commands/init";
import { add } from "../src/commands/add";
import list from "../src/commands/list";

program.version("1.0.0").description("auraD CLI for React components");

program
  .command("init")
  .description("Initialize TrendUI in your React Native project")
  .action(init);

program
  .command("add [components...]")
  .description("Add TrendUI components to your project")
  .action((components) => add(components));

program
  .command("list")
  .description("List all available components")
  .action(list);

program.parse(process.argv);
