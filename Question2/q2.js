// JavaScript Document
//A class named Person is created.
class Person {
    //A constructor is created of the class Person where the parameters are name,age,gender and classes
  constructor(name, age, gender, classes) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
//A function named greeting is created. When the user calls the function, the message is displayed in the console with the name.
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };
    
//A function named bye is created. When the user calls the function, the message of a goodbye is displayed in the console with the name.
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

// The two instances(Parth and harmanpreet) are created for the class Person where the detail is stored.
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//A class named Teacher is created that inherts the properties of the class Person. Two new properties-subject and gender are added to the class teacher.
class Teacher extends Person {
  constructor(name, last, age, gender, interests, subject, grade) {
      //properties of class Teacher are inherited using super keyword.
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
//instance of the class Teacher with the details.
let jessica=new Teacher('Jessica',35,'female',['cats','coffee','coding'],'Javascript',95);