// JavaScrip2 2 pamoka
// let number = 9;
// let sk = 4;

// sk = "4" * 5;

// alert("Error404");

// input = prompt("Password");

// number = parseInt("Enter number");

// console.log(number);

// switch (true){
//     case (number <= 10):
//         document.write("Less that 10")
//         break;
//     case (number == 10):
//         document.write("Equal that 10")
//         break;
// }

// let stringType = "string";
// let numberArray = ["Kaskoks", "15", 7, 8, 9];
// let sum = 0;


// numberArray.forEach(element => {
//     sum = sum + element;
// })

// console.log(sum);

// function Multiply(p1, p2) {
//     p1 = p1.toLowerCase();
//     value = p1 + " " + p2;
//     return value;
// }

// let p1 = "LOWER CASE";
// let p2 = 2;

// console.log(Multiply(p1, p2));

let flatTire = {
  type: "Fiat",
  model: "500",
  color: "White",
};

let allCars = [
  {
    type: "WV",
    model: "Golf",
    color: "Buzuazinis"
  },

  {
    type: "WV",
    model: "456",
    color: "Rudziu"
  },

  {
    type: "Ford",
    model: "Siera",
    color: "Zalia",
    price: 230
  },
  {
    invalid: false
  }

]

allCars.forEach(car => {
  console.log(car.type + " " + car.model + " " + car.color + " " + car.price )
})

console.log(allCars.lenght);

allCars = allCars.filter((car) => car.type == "WV");

carModels = allCars.map((car) => car.model);

carModels.forEach(carModel => {
  console.log(carModel);
})

allCars.forEach(car => {
  car.price = 1000;
})

listOfCars.forEach(carModel => {
  console.log(carModel);
})