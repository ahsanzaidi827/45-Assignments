// lowercase: ahsan
// UPPERCASE: AHSAN
//Titlecase:Ahsan

//lowercase
let personName:string="Ahsan"
console.log("lowercase:", personName.toLowerCase());

//UPPERCASE
console.log("uppercase:", personName.toLocaleUpperCase());

//Titlecase
console.log("uppercase:", personName.replace(/\bw/g,c => c.toUpperCase()));




