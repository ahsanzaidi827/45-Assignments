// lowercase: ahsan
// UPPERCASE: AHSAN
//Titlecase:Ahsan
//lowercase
var personName = "Ahsan";
console.log("lowercase:", personName.toLowerCase());
//UPPERCASE
console.log("uppercase:", personName.toLocaleUpperCase());
//Titlecase
console.log("uppercase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
