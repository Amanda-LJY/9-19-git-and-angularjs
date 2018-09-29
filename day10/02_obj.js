var Student = require("./Student.js");

//创建对象
var s1 = new Student("lisa",23);
console.log("属性"+s1.name+","+s1.age);
s1.sayHi();
s1.study();