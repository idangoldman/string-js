String.prototype.sayHello = function sayHello() {
  return `Hello ${this}!`;
};

String.prototype.capitalize = function capitalize() {
  return this[0].toUpperCase() + this.slice(1).toLowerCase();
};

// export const zeroPad = ( number, prefix = true ) => {
//   return number <= 9 ? prefix ? '0' + number : number + '0' : number.toString();
// };
//
//
// export const snakeToCamel = ( string ) => {
//   return string.replace( /(\-\w)/g, match => match[1].toUpperCase() );
// };
