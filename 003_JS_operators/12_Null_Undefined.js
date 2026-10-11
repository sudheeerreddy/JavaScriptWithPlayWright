/* simple definitions:
undefined---> A variable exists, but it has not been assigned any value yet
JavaScript itself sets this automatically

null---> A variable exists, but the developer explicitly assigns "no value " or "empty"

it is the intentional absence of any value

*/

var x;
console.log(x);

console.log(typeof x);


var audi = null;
console.log(audi);
console.log(typeof audi);


function greet(){

}
console.log(greet());

/* 
Undefined ---->> variable is declared but ,value is not assigned yet,typeof will also be undefined, javascript automatically sets it

null--->> variable is declared but value is set to intentionally empty, typeof will be object, Developer manually sets it to empty


in weak comparison ==  undefined == null  gives true;
in strong comparison ===  undefined === null gives false;
*/