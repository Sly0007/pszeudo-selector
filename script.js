console.log('Szabó Szilárd');

let bookCount = 11;
for (let i = 1; i < bookCount; i++) {
    console.log(i*2);
  }

let printNumbersTill = (szam) => {
    for (let i = 1; i < szam+1; i++) {
        console.log(i);
    }
}
printNumbersTill(20);
printNumbersTill(15);

let getGreetingTo = (nev) => {
    console.log('Greeting ' +nev);
};
getGreetingTo('Mark'); 

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };
printValues([0, 3, 6, 7, 9]);

let myNumbers = [10, 20, 30, 50, 12];
myNumbers.forEach((Number) => {
    console.log(Number);
  });
