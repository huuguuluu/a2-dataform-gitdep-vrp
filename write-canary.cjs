const { writeFileSync } = require("node:fs");

writeFileSync(
  "a2-gitdep-managed-canary.txt",
  "A2-GITDEP controlled install lifecycle executed\n",
  "utf8",
);
