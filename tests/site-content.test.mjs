import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const indexPath = new URL("../src/pages/index.astro", import.meta.url);
const astroConfigPath = new URL("../astro.config.mjs", import.meta.url);
const profilePhotoPath = new URL("../public/leo-sutton-profile.jpg", import.meta.url);

assert.equal(existsSync(indexPath), true, "homepage should exist at src/pages/index.astro");
assert.equal(existsSync(astroConfigPath), true, "Astro config should exist");
assert.equal(existsSync(profilePhotoPath), true, "verified profile photo should exist in public assets");

const index = readFileSync(indexPath, "utf8");
const config = readFileSync(astroConfigPath, "utf8");

assert.match(index, /Leo Sutton/, "homepage should identify Leo Sutton");
assert.match(index, /Professional profile/i, "homepage should be explicitly positioned as a professional profile");
assert.match(index, /Unity Advisory/, "homepage should include current role context");
assert.match(index, /Deloitte UK/, "homepage should include previous experience context");
assert.match(index, /Finance transformation/, "homepage should cover finance transformation");
assert.match(index, /ERP implementation/, "homepage should cover ERP implementation");
assert.match(index, /Change management/, "homepage should cover change management");
assert.match(index, /LinkedIn/, "homepage should link to LinkedIn");
assert.match(index, /Contact on LinkedIn/, "homepage primary contact action should be LinkedIn-only");
assert.match(index, /\/leo-sutton-profile\.jpg/, "homepage should render the verified profile photo");
assert.match(index, /Portrait of Leo Sutton in a navy jacket and white shirt/, "profile photo should have descriptive alt text");
assert.doesNotMatch(index, /mailto:/i, "homepage should not publish an email contact link");
assert.doesNotMatch(index, /protonmail/i, "homepage should not mention ProtonMail as a public contact method");
assert.doesNotMatch(index, /leo\.sutton@/i, "homepage should not publish Leo's email address");
assert.doesNotMatch(index, /turn complexity into clear operating rhythm/i, "copy should avoid the previous more hyperbolic hero line");
assert.doesNotMatch(index, /theatre/i, "copy should avoid overly pointed language");
assert.match(index, /Contact/i, "homepage should include a contact section");
assert.match(config, /https:\/\/leosutton\.me/, "Astro site URL should be leosutton.me");
