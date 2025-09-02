let numbers=[1,23,4,32,22];
console.log(numbers)

// Insertion

numbers.push(220)//in the ending 
console.log(`after push new array is ${numbers}`)
numbers.unshift(0)// in the beginning
console.log(`after unshift new array is ${numbers}`)
numbers.splice(2,1,'a','b') // in between
console.log(`after splice ${numbers}`)

// Searching

// for primitive array we can find through two ways
// i.e 1. indexof() and if not pressent return -1
    // 2. includes() return true or falses
console.log(numbers.indexOf(22))
console.log(numbers.includes(22)) 
console.log(numbers.indexOf(22,2))// here 2 means i have to start searching from index 2

// now for reference array we use callback function /predicate function in find
 let courses=[{no :1, nam:"sachin"},
    {no :2, nam:"vishal"}]

courses.push({no :3, nam:"chitta"})//adding from last in array of object

let course=courses.find(function(course){
        return course.no===3;
    })
    console.log(course)
// now short it or convert it into more redable form using arrow function
let cou=courses.find(cou=>cou.nam==="sachin");
console.log(cou)

// Removing

console.log(numbers)
numbers.pop()//from end
console.log("after poping",numbers)
numbers.shift()//from start
console.log("after shift",numbers)
numbers.splice(3,2)//from in between here 3 is index and 2 to toatl numbers we want to delete.
console.log("after splice",numbers)

//Empting an array

let numb=[1,2,3,4,5,6,7,8,9]
console.log(numb) 
numb.length=0;
// or
//numb.splice(0,numb.length);
//or can apply loop using pop
console.log(numb)

//Combining array

let a=[1,2,3]
let b=[4,5,6]
let combo=a.concat(b)
console.log(combo)

//slicing

let sli=combo.slice(2,5)
console.log(sli)

//combining array of object
let abba=[{val:1,nam:"king"},{val:2,nam:"shin"},{val:3,nam:"ing"}]
let dabba=[{no :1, nam:"sachin"},{no :2, nam:"vishal"}]
let jabba=abba.concat(dabba)
console.log(jabba,)
//slicing array of object
let sliced = jabba.slice(1, 4);
console.log(sliced);

//spread operator ... is used for combining/ copy

let sp=[...a,"king",...b];
console.log(sp);
let neww=[...sp];//copying array using spread
console.log(sp);

// iteration in Array
let it=[1,2,3,2,2,3,4,3,99]
for (let value of it){//using for-of loop
    console.log(value)
}

it.forEach(function(number){
    console.log(number);
})
//now arrow function 
it.forEach(number =>console.log(number));

//converting array into string using join and vice versa using split
let arr=[1,2,3,4,5,6]
let newStr=arr.join(",")
console.log(newStr);
let newArr=newStr.split(",")
console.log(newArr);

//Sorting

 let sorr=[2,11,14,25,6,43,3]
 let so=sorr.sort(function(a,b){
    return a-b
 })
 console.log(so)  

 let s=[{val:1,nam:"king"},{val:2,nam:"shin"},{val:3,nam:"ing"}]
 let soo=s.sort(function(a,b){
    return b.val-a.val
 })
 console.log(soo)  

 //filtering
 let fil=sorr.filter(function(value){// arrow fuction      sorr.filter(value=> value>20;)
    return value >20;
 })
 console.log(fil)  

 //maping
 let maap=[1,2,-1,-22];
 let newMaap=maap.map(value=>"no"+value);
 console.log(newMaap)
//object
let filtered=maap.filter(value=>value>0)
let newFiltered=filtered.map(num=>({valuss2swe:num}))
console.log(newFiltered)

//chaning
// let newFiltered=filteredmaap.filter(value=>value>0).map(num=>({valuss2swe:num}))


// array reduction 
let ara=[1,2,11,111];

let total=0
for(let value of ara){
total += value;}
console. log(total) ;
// or 
let totalSum =ara.reduce((acumulator, curentvalue)=>acumulator+curentvalue);
console.log(totalSum)