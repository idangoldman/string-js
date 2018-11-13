import './regex';


String.prototype.sayHello = function sayHello() {
  return `Hello ${this}!`;
};

String.prototype.capitalize = function capitalize() {
  return this[0].toUpperCase() + this.slice(1).toLowerCase();
};

String.prototype.toNumber = function toNumber() {
  return parseFloat(this, 10);
};

String.prototype.pad = function pad() {
  return this.toNumber() < 10 ? `0${this}` : this.toString();
};

String.prototype.snakeToCamel = function snakeToCamel() {
  return this.replace(/(\-\w)/g, match => match[1].toUpperCase());
};

String.prototype.clean = function clean() {
  return this
    .replace(/<(.*?)>/gm, '')
    .replace('&nbsp;', '')
    .replace(/\s\s+/gm, ' ')
    .trim();
};
