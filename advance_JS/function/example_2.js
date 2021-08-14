function interest(princ) {
  var interest = 0.2;
  return princ * interest;
}
var princ = 500;
var inte = interest(princ);
console.log("Interest is -> " + inte);
var final = princ + inte;
console.log("Final Amount is -> " + final);
