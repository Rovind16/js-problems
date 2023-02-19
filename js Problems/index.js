//Count logged in users,count users having greater than equal to 50 points from the following object.

const personAccount = {
    fname: 'John',
    lname: 'Doe',
    incomes: new Map(),
    expenses: new Map(),
    get tIncome() {
      let t = 0;
      for (const amount of this.incomes.values()) {
        t += amount;
      }
      return t;
    },

    get tExpense() {
      let t = 0;
      for (const amount of this.expenses.values()) {
        t =t+amount;
      }
      return t;
    },

    accountInfo() {
      return `Account Information:\nName: ${this.fname} ${this.lname}\nt Income: ${this.tIncome}\nt Expense: ${this.tExpense}`;
    },
  
 
    addIncome(note, amount) {
      this.incomes.set(note, amount);
    },
  

    addExpense(note, amount) {
      this.expenses.set(note, amount);
    },

    accBalance() {
      return this.tIncome - this.tExpense;
    }

    
  };
console.log(personAccount.accountInfo());
console.log(personAccount.accBalance());
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON); 
var age = 250;
const ageJSON = JSON.stringify(age);
console.log(ageJSON);  
const isMarried = true;
const strIsMarried = JSON.stringify(isMarried);
console.log(strIsMarried); 
const student = {
    fname:'Aaaa',
    lname:'Ye',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
  
  const studentstrified = JSON.stringify(student);
  console.log(studentstrified);
    const studentSubset = {
    fname: student.fname,
    lname: student.lname,
    skills: student.skills
  };
  const studentstr = JSON.stringify(studentSubset);
  console.log(studentstr);


//problem 1 for each
var a=["aa","bb","cc","dd"];
a.forEach(value => console.log(value));

//problem 2 map()
var n = [1, 2, 3, 4, 5];
const sqr = n.map(num => num * num);
console.log(sqr);

//problem3 Use filter to filter out country start with 'E';

var c=["England","India","Egypt"];
var cnt=c.filter(f=>(f[0]=='E'));
console.log(cnt);

//problem 4 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(arr) {
    const str = arr.filter(item => typeof item === 'string');
    return str;
  }
  const s = [1, 'india', 'srilanka',2,'bangladesh',78];
  const str = getStringLists(s);
  console.log(str); 

//problem 5
  const arr=["Estonia ","Finland ","Sweden ","Denmark ","Norway ","Iceland ","are ","north europian ","countries "];
    function concat(str,str1){
    return str+str1;
 }
  let ans = arr.reduce(concat);
  console.log(ans);

  //problem7

  const arr1 = [2.7, 3.14, 9.81, 98.6, 66];
  const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = arr1;
  console.log(e); 
  console.log(pi); 
  console.log(gravity); 

//problem8  Sets
const x = [4, 5, 8, 9]
const y = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const sets = new Set(x);
console.log(sets);
const mySet = new Set();
for (let i = 0; i <= 10; i++) {
  mySet.add(i);
}
console.log(mySet); 
sets.delete(5);
console.log(sets);
sets.clear();
console.log(sets);


//problem 9 union and intersection
const a1 = new Set(x);
const b1 = new Set(y);
const union = new Set([...a1, ...b1]);
console.log(union);
const intersection = new Set([...a1].filter(x => b1.has(x)));
console.log(intersection); 
const difference = new Set([...a1].filter(x => !b1.has(x)));
console.log(difference);


  //problem11  "Shape" constructor OOPS
  
  class Shape {
    constructor(colour ) {
      this.colour = colour;
    }
  }
const mySh = new Shape("Red");
console.log(mySh.colour);


//problem 12
class Shape1 {
    constructor(colour) {
      this.colour = colour;
      this.type = "Shape";
    }  
    describe() {
      console.log(`A ${this.colour} ${this.type}`);
    }
  }
  const myShape = new Shape1("Red");
  myShape.describe();
  const anotherShape = new Shape1("Yellow");
  anotherShape.describe(); 
  
  //problem13 Inheritance
  class Square extends Shape {
    constructor(colour, sideLength) {
      super(colour);
      this.sideLength = sideLength;
      this.s=sideLength*sideLength;
      this.type = "Square";
    }
  }
  const mySquare = new Square("red", 5);
  console.log(mySquare.sideLength);
  console.log(mySquare.colour);
  console.log(mySquare.type);

  //problem14 Inheritance

  const square = new Square("blue", 5);
  console.log(square.s);

  //problem 15
  class Utilities {
    static camelCase(str) {
        var str3=[];
        var i=0
         while(i<str.length){
             if(str[i]===" "){
                  str3.push(str[i+1].toLowerCase());
                  i=i+2;
             }else{
                str3.push(str[i].toLowerCase());
                i++;
             }
      }
      return str3.join("");
    }
  }
  console.log(Utilities.camelCase("hello there"));
  console.log(Utilities.camelCase("HELLO THERE"));
  console.log(Utilities.camelCase("I love cookies"));
  console.log(Utilities.camelCase("Monkey Banana"));
    


  