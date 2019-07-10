"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const fs_1 = require("fs");
const path_1 = require("path");

function* tokenize(content, separator = "=") {
  if (!content) return;
  const tokens = content.split(/\n/);
  if (!tokens) return;
  for (const token of tokens) {
    const [property, value] = token.split(separator);
    yield [property, value];
  }
}

exports.default = (path, separator = "=") => {
  const file = fs_1.readFileSync(path_1.join(path || process.cwd(), ".env"), {
    encoding: "utf8"
  });
  const file_tokens = tokenize(file, separator);
  if (file_tokens) {
    for (const [property, value] of file_tokens) {
      process.env[property] = value;
    }
  }
};
