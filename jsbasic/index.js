//object creation
let person = {
    nam: "king",//properties
    kad: 5,
    kam() {//behaviour or method
        console.log("draw");
    }

};
console.log(person.nam);

//  --------->factoryfunction<-----------------
function banda(h,w) {
    human = {
        height: h,
        weight: w,
        job() {
            console.log("sports");
        }
    };
    return human
}
let newobj=banda( 6,80);
console.log(newobj.height);

//  --------->constructor function<-----------------

function  newbanda(){
    this.Height= 7;
    this.Weight= 99;
    this.Job=function() {
        console.log("khiladi");
    }
}
// object creation using constructor function
let NewObj1=new newbanda();// new yaha parf empty object ka ley const. function call kar raha hu.


NewObj1.chal="matak"//dynamic nature of object i.e addition and deletion of new property
console.log(NewObj1)
delete NewObj1.chal
console.log(NewObj1)

for(let key in person) {//for-in loop
//keys are re ected through key variable
//values are reflected through person [key]
    console.log(key,person[key])
}

// object clonning 
// 1.iteration 
let des0={};
for (let key in NewObj1){
des0[key]=NewObj1[key];
}
console.log(des0);
// 2.assign
let des1=Object.assign({},NewObj1);
console.log(des1)
// 3.spread
let des2={...NewObj1};
console.log(des2);
let new11=Math.max(2,11,.3);
console.log(new11)
const aa=b(){};

 a=10;
 let a;
 b=20;
 var b;