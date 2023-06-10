// const input = [1, -4, 12, 0, -3, 29, -150];
// var sum=0;
// for (let i =0 ; i<input.length ; i++){
//     if(input[i]>=0){
//          sum += input[i]; 
//     }

// }
// if(sum>=0){
//     console.log(sum);
// }else{
//     console.log('0');
// }
//Question2
// const input = [1, 2, 3, 4, 5];
// for(let i =0 ; i<input.length; i++){
//     console.log(input[i]*input[i]);
// }


//Quesion 3
// const input = [12, 46, 32, 64];

// const sum = input.reduce((acc, num) => acc + num, 0);
// const mean = sum / input.length;
// console.log("mean",mean);

//Question 4
// const input = [
//  {
//    name: "John",
//    age: 13,
//  },
//  {
//    name: "Mark",
//    age: 56,
//  },
//  {
//    name: "Rachel",
//    age: 45,
//  },
//  {
//    name: "Nate",
//    age: 67,
//  },
//  {
//    name: "Jennifer",
//    age: 65,
//  },
// ];

// const sorrt= input.map((number)=>number.age).sort((a,b)=>a-b);
// const young= sorrt[0];
// const old= sorrt[sorrt.length-1];
// console.log("young",young);
// console.log("Old",old);
// console.log("Age Difference",old-young);



//Question5
// function fact( n){
//     if(n==0 ){
//         return 1;

//     }
//     return n*fact(n-1);

// }


// const num =5; 
// console.log(fact(num));

//Question 6
// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//    ];

   
//    const avg= products.map((val)=>val.price);
//    var sum=0;
//    for(let i =0 ; i<avg.length; i++){
//       sum+=avg[i];
//    }
//    const average= sum/avg.length;
//    console.log(average);

//    const prod= products.map((val)=>{
//     if(val.price>=average){
//         console.log("Price and category ",val.price,val.category)
//     }
//    })

