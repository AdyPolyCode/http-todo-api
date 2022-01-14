const { readFileSync } = require('fs');
const { join } = require('path');

const configFile = join(__dirname, 'config.json');
const configString = readFileSync(configFile, { encoding: 'utf-8' });
const configObject = JSON.parse(configString);

module.exports = class Config {
  #config;

  constructor() {
    this.#config = configObject;
  }

  getValue(key) {
    return this.#config[key];
  }

  get config() {
    return this.#config;
  }
};
