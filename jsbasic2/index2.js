function addition() {
    let thirdVar = 0;
    for (let num of arguments) {// arguments is a special object that stores all paramater we pass during function call
        thirdVar += num;
    }
    return thirdVar
}
console.log(addition(1, 2, 1, 2, 2,))

function sub(a,b=2,c) {
    let res=a-b-c;
    return `done =${res}`
}
console.log(sub(10,undefined,1))

let person={
    fName :"sachin",
    lName :"sharma",
    get fullName(){//getter function
      return `${person.fName} ${person.lName}`
    },
    set fullName(value){  //setter function 
       let new1=value.split(" ")
       this.fName=new1[0]
       this.lName=new1[1]
    }
}
person.fullName="vishal sharma"
console.log(person.fullName)