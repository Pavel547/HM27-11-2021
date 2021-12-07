
// ДЗ

// 3
// const findBestEmployee = function (employees) {
//  let arr = Object.values(employees)
//  let max = Math.max(...arr)
//  for(let employee in employees){
//  if(employees[employee] === max)
//   return {
//     name: employee,
//     value:employees[employee]

//   }

//  }
//    console.log(employee.max);
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// );

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// );

//5
// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// );


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   let random = [];
//   for(let item of arr){
//     if(item.hasOwnProperty(prop)){
//       random.push(item[prop])
//     }
//   }
//   return random
  
// };

// const getAllPropValues = function (arr, prop) {
//     let random = [];
//     for(let item of arr){
//       for(let element in item){
//         if(element === prop){
//           console.log(item[element]);
//           random.push(item[element]);
//         }
//       }
//     }
    
//   };

// console.log(getAllPropValues(products, 'name')); 
// console.log(getAllPropValues(products, 'quantity')); 
// console.log(getAllPropValues(products, 'category'));

//6
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let random =0;
//   for(let item of allProdcuts){
//     //console.log(item["name"]);
//     if(item["name"] === productName){
//       total = item["price"] * item["quantity"]
//     }
//   }
//   return total;
// };

// console.log(calculateTotalPrice(products, 'Радар'));
// console.log(calculateTotalPrice(products, 'Дроїд'));

//1
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood="happy";
// user.hobby="skydiving";
// user.premium=false;
// console.log(user);