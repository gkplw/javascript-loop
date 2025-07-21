// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
// for(let i = 0;i<restaurants.length;i++){
//     newRestaurants.push("Restaurant Name: " + restaurants[i]);    
// }
// console.log(newRestaurants);

for(let i of restaurants){
    newRestaurants.push("Restaurant Name: " + i);
}
console.log(newRestaurants);