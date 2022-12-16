// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError){
//         if(!this.pizzas.includes(pizzaName)){
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//         }
//         return onSuccess(pizzaName);
//     },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// ======================================================================================================================
// const changeEven = (numbers, value) => {
//   // Change code below this line
//   const evenArr = [];
  
//   numbers.forEach(i => {
//     if (i % 2 === 0) {
//       let elem = i + value;
//         evenArr.push(elem);
//       } else {
//         evenArr.push(i);
//     }
//   })
//   // const evenArr = [...numbers];
//   // evenArr.forEach(function (i) {
//   //   if (i % 2 === 0) {
//   //     i = i + value;
//   //   }
//   // });
//   return evenArr;
  
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// ======================================================================================================================