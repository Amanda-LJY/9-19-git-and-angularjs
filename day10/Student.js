function Student(name,age){
this.name = name;
this.age = age;
}
Student.prototype.study = function () { 
  console.log(this.name+"正在学习");
 }
 Student.prototype.sayHi = function () { 
  console.log("大家好，我叫"+this.name+",今年"+this.age+"岁");
 }

//  var str1 = new Student("lisa",23);
module.exports = Student;