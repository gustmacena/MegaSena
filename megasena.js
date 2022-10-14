Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}
function random(i, f) {
if (i > f) {
    numInicial = f;numFinal = i+1;
    } else {
        numInicial = i;numFinal = f+1;
    }
    numRandom = Math.floor((Math.random()*(numFinal-numInicial))+numInicial);
    return numRandom;
}
var megasena = function (){
  this.result = [];
  var num = 0;
do
  {
    num = random(1,60);
    if (!this.result.contains(num)){
      this.result.push(num); 
    }
  }
while (this.result.length<9);
  return this.result.sort(function(a, b){return a-b});
}
console.log(megasena())