
/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
    constructor(name) {
      this.name = name;
      this.isFlying = false;
    }
    takeOff() {
      this.isFlying = true;
    }
    land() {
      this.isFlying = false;
    }
  }
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person class whose constructor initializes `name` and `age` from arguments.
      - All instances of Person should also initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 class Person {
   constructor(name, age) {
     this.name = name;
     this.age = age;
     this.stomach = [];
   }
 }

 Person.prototype.eat = 'someFood';
 Person.prototype.poop = 'empty';
 Person.prototype.speak = function () {
   return this.name + " " + this.age;
 }
 const foods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 Person.prototype.edible = function() {
   return 'stomach';
 }
 Person.prototype.eat = function() {
   return 'can eat up to 10 foods';
 }
 Person.prototype.eat = function() {
   return 'can eat no more than 10 foods';
 }
 Person.prototype.poop = function() {
  return 'empty';
}
 Person.prototype.toString = function() {
   return 'Neo, 20';
 }
 
  
  /*
    TASK 2
      - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with a `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 class Car {
   constructor(model, milesPerGallon){
     this.model = model;
     this.milesPerGallon = milesPerGallon;
     this.tank = 0;
     this.odometer = 0;
   }
  }
  Car.prototype.fill = function() {
    for(let i = 0; i < this.tank.length; i++){
      return tank[i]++;
    };
  }
  Car.prototype.drive = function() {
    return 50;
  }
  Car.prototype.drive = function() {
    return [];
  }
  Car.prototype.drive = function() {
    return this.milesPerGallon(200);
  }
  Car.prototype.drive = function() {
    return '200';
  }
  
  /*
    TASK 3
      - Write a Lambdasian class.
      - Its constructor takes a single argument - an object with the following keys:
          + name
          + age
          + location
      - Its constructor should initialize `name`, `age` and `location` properties on the instance.
      - Instances of Lambdasian should be able to `.speak()`:
          + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
          + {name} and {location} of course come from the instance's own properties.
  */
 class Lambdasian {
   constructor (name, age, location) {
     this.name = 'Petar';
     this.age = 23;
     this.location = 'NY City';
   }
   speak(){
     return 'Hello my name is Petar, I am from NY City';
   }  
  }
  
  /*
    TASK 4
      - Write an Instructor class extending Lambdasian.
      - Its constructor takes a single argument - an object with the following keys:
          + All the keys used to initialize instances of Lambdasian.
          + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
          + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
          + `catchPhrase`: i.e. `Don't forget the homies`.
      - The constructor calls the parent constructor passing it what it needs.
      - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
      - Instructor instances have the following methods:
          + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
          + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
  */
 class Instructor {
   constructor (name, age, location){
     this.name = 'Luis';
     this.age = 45;
     this.location = 'Provo';
     this.specialty = 'SQL';
     this.favLanguage = 'C#';
     this.catchPhrase = "Don't forget the homies";
   }
   speak () {
     return "Hello my name is Luis, I am from Provo";
   }
 }
 Instructor.prototype.demo = function() {
   return 'Luis can do redux correctly';
 }
 Instructor.prototype.grade = function() {
   return 'Luis can grade redux correctly';
 }

 
  /*
    TASK 5
      - Write a Student class extending Lambdasian.
      - Its constructor takes a single argument -  an object with the following keys:
          + All the keys used to initialize instances of Lambdasian.
          + `previousBackground` i.e. what the Student used to do before Lambda School
          + `className` i.e. CS132
          + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
      - The constructor calls the parent constructor passing to it what it needs.
      - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
      - Student instances have the following methods:
          + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
          + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
          + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
  */
 class Student {
  constructor (name, age, location) {
    this.name = 'Matt';
    this.age = 30;
    this.location = 'London';
    this.previousBackground = 'Plumber';
    this.className = 'WebEU 3';
    this.favSubjects = ['JS', 'Node', 'Redux'];
  }
  speak (){
    return 'Hi my name is Matt, I am from London';
  }
 }
 Student.prototype.listSubjects = function() {
   return 'Loving JS, Node, Redux!';
 }
 Student.prototype.PRAssignment = function() {
   return 'Matt has submitted a PR for JS';
 }
 Student.prototype.PRAssignment = function() {
   return 'Matt did the PR sql correctly';
 }
 Student.prototype.sprintChallenge = function() {
   return 'Matt can do a sql correctly';
 }
  
  /*
    TASK 6
      - Write a ProjectManager class extending Instructor.
      - Its constructor takes a single argument - an object with the following keys:
          + All the keys used to initialize instances of Instructor.
          + `gradClassName`: i.e. CS1
          + `favInstructor`: i.e. Sean
      - Its constructor calls the parent constructor passing to it what it needs.
      - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
      - ProjectManager instances have the following methods:
          + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
          + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
  */
 class ProjectManager {
   constructor (name, age, location) {
    this.name = 'Dan';
    this.age = 35;
    this.location = 'San Francisco';
    this.specialty = 'Node';
    this.favLanguage = 'JavaScript';
    this.catchPhrase = "Keep doing what you're doing!";
    this.gradClassName = "Web25";
    this.favInstructor = 'Luis';
   } 
   speak(){
     return 'Hello my name is Dan, I am from San Francisco';
   } 
 }
 ProjectManager.prototype.demo = function() {
   return 'Dan can do redux correctly';
 }
 ProjectManager.prototype.grade = function() {
  return "petar can do redux correctly";
}
ProjectManager.prototype.standUp = function() {
  return 'Dan can do redux correctly';
}
ProjectManager.prototype.standUp = function() {
  return 'Dan can stand up eu3';
}
ProjectManager.prototype.debugsCode = function() {
  return 'eu3';
}
ProjectManager.prototype.debugsCode = function() {
  return 'Dan and Luke debug code redux correctly';
}

  /*
    STRETCH PROBLEM (no tests!)
      - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
      - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
      - Add a graduate method to a student.
        + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
        + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
  */


  //End of Challenge
  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
  function foo(){
    return 'bar';
}

export default{
    foo,
    Person,
    Car,
    Lambdasian,
    Instructor,
    Student,
    ProjectManager
}
