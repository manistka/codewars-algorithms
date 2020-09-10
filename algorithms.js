//sayHello
const sayHello = name => `Hello, ${name}`; 


//multiply
function multiply(a, b) { 
    return a * b
   }


//divide
function isDivideBy(number, a, b) {
    if(number % a === 0 && number%b === 0) {
      return true
    } else {
      return false
    }
    } 


//filling an array
function arr(n){
    const newArr = [];
    for(i = 0; i < n; i++) {
      newArr.push(i);
    }
    return newArr;
  }


//n-th power
const index = (array, n) => array[n] ** n || -1;


//mean of array
function getAverage(marks) {
    return Math.floor(marks.reduce((a, b) => a+= b, 0) / marks.length)
  }


//change speed  
function cockroachSpeed(s) {
    const secInHrs = 3600 
    const cmInKm = 100000;
    return Math.floor((s * cmInKm) / secInHrs);  
  }


// hello name or world
function hello(name) {
    if(!name){
      return "Hello, World!"
    }
    const lowerName = name.toLowerCase();
    const letterFirst = lowerName.charAt(0).toUpperCase();
    return "Hello, " + letterFirst + lowerName.substring(1) + '!';
  }


//capitalizeWord
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }


//multiply
const areaOrPerimeter = function(l , w) {
    if(l === w) {
      return l * w;
    }
    return (l + w) * 2;
  };


//add 
let [laLigaGoals, championsLeagueGoals, copaDelReyGoals] = [43, 10, 5],
    totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;


//math.floor
function litres(time) {
    return Math.floor(time * 0.5);
  }


//fake binary 
function fakeBin(x){
    return x.split('').map(n => {
      if(n < 5) {
        return '0';
      } 
      return '1';
    }).join('');
  }