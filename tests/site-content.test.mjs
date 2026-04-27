import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const indexPath = new URL("../src/pages/index.astro", import.meta.url);
const astroConfigPath = new URL("../astro.config.mjs", import.meta.url);

assert.equal(existsSync(indexPath), true, "homepage should exist at src/pages/index.astro");
assert.equal(existsSync(astroConfigPath), true, "Astro config should exist");

const index = readFileSync(indexPath, "utf8");
const config = readFileSync(astroConfigPath, "utf8");

assert.match(index, /Leo Sutton/, "homepage should identify Leo Sutton");
assert.match(index, /Professional profile/i, "homepage should be explicitly positioned as a professional profile");
assert.match(index, /Contact/i, "homepage should include a contact section");
assert.match(config, /https:\/\/leosutton\.me/, "Astro site URL should be leosutton.me");
