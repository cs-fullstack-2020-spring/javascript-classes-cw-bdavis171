// //Problem 1:
// //Create a GitHubRepository class with the following properties: userName, filename, descriptionOfRepository, and code
// class GitHubRepository {
//     constructor(userName, fileName, descriptionOfRepository, code) {
//         this.userName = userName;
//         this.fileName = fileName;
//         this.descriptionOfRepository = descriptionOfRepository;
//         this.code = code;
//     }
//     //Create a method that prints all properties
//     printAll() {
//         console.log(`Username: ${this.userName}\nFilename: ${this.fileName}\nDescription: ${this.descriptionOfRepository}\nCode: ${this.code}`);
//     }
// }
// //Create an object of the class
// let gitHubRepo1 = new GitHubRepository('Brandon', 'JavaScript_Classes', 'This is a code for classes', '*Put some code here, please*');
// //Print the properties using the method
// gitHubRepo1.printAll();

// //Problem 2:
// //Create a Movie class with the following properties: movieName, rating, and yearReleased
// class Movie {
//     constructor(movieName, rating, yearReleased) {
//         this.movieName = movieName;
//         this.rating = rating;
//         this.yearReleased = yearReleased;
//     }
//     //Create a method asking the user to change the rating
//     changeRating() {
//         this.rating = prompt("What's the new rating for this movie?"); // !! Nice job doing this in one line
//     }
//     //Create a method asking the user to change the year released
//     changeYearReleased() {
//         this.yearReleased = prompt("What's the new year released for this movie?"); // !! Nice job doing this in one line
//     }
//     //Create a method to print the properties 
//     printAll() { // !! Nice addition to the requirements
//         console.log(`Name: ${this.movieName}\nRating: ${this.rating}\nYear Released: ${this.yearReleased}`);
//     }
// }
// //Create an object for the class
// let movie1 = new Movie("Action Movie 4:Return of the Action", "R", 2039);
// //Print the properties using the method
// movie1.printAll();
// //Change the rating and the year released using the method
// movie1.changeRating();
// movie1.changeYearReleased();
// //Print the properties again
// movie1.printAll();

// //Problem 3:
// //Create a Student class with the following properties: studentName, codeSchoolCohort, and grades(grades should be an array of objects and each object should have the properties assignmentName and assignmentScore)
// class Student {
//     constructor(studentName, codeSchoolCohort, grades) {
//         this.studentName = studentName;
//         this.codeSchoolCohort = codeSchoolCohort;
//         this.grades = grades;
//     }
//     //Create a method that changes the student name
//     changeStudentName() {
//         this.studentName = prompt("What is the student's name?");
//     }
//     //Create a method that accepts an assignment name and assignment score and adds a grade object to the grades array
//     addGrade(assignmentName, assignmentScore) {
//         let assignment = { name: assignmentName, score: assignmentScore };
//         this.grades.push(assignment);
//     }
//     //Create a method that prints the properties
//     printAll() { // !! Nice addition to th requirements
//         console.log(`Name: ${this.studentName}\nCohort: ${this.codeSchoolCohort}`);
//         for (let i = 0; i < this.grades.length; i++) {
//             console.log(`Assignment Name: ${this.grades[i].name}\nScore: ${this.grades[i].score}`)
//         }
//     }
// }
// //Create two objects of the class with empty grade arrays
// let student1 = new Student('Brandon', 4, []);
// let student2 = new Student('Brianna', 5, []);
// //Print the objects using the method
// student1.printAll();
// student2.printAll();
// //Update the name of one of the students
// student1.changeStudentName();
// //Add one grade object to each student class grade array
// student1.addGrade('Assignment1', 4);
// student2.addGrade('Assignment1', 5);
// //Print the objects again
// student1.printAll();
// student2.printAll();

// //Challenge 1:

// //Create a person class with the following properties: name, weight, and height
// class Person {
//     constructor(name, weight, height){
//         this.name = name;
//         this.weight = weight;
//         this.height = height;
//     }
//     //Create a method taht calculates the BMI using the formula: (weight / (height * height)) * 703
//     calculateBMI(){
//         let bmi = (this.weight / (this.height*this.height) * 703);
//         return bmi;
//     }
//     //Create a method that prints properties
//     printAll(){
//         console.log(`Name: ${this.name}\nWeight: ${this.weight} lbs\nHeight: ${this.height} in.`);
//     }
// }
// //Create an object of the class
// let person1 = new Person('Brandon',250,69);
// //Use the methods
// person1.printAll();
// console.log(`BMI: ${person1.calculateBMI()}`);


// //Challenge 2:

// //Create a Bank calss with the folowing properties: name and balance
// class Bank {
//     constructor(name, balance){
//         this.name = name;
//         this.balance = balance;
//     }
//     //Create a method to withdraw
//     withdraw(amount){
//         console.log(`${this.name} withdraws $${amount}`);
//         this.balance = this.balance - amount;

//     }
//     //Create a method to deposit
//     deposit(amount){
//         console.log(`${this.name} deposits ${amount}`);
//         this.balance = this.balance + amount;
//     }
//     //Print properties
//     printAll() {
//         console.log(`Name: ${this.name}\nBalance: $${this.balance}`);
//     }
// }
// //Create an object with the following properties: name:'Matt' balance:'1000'
// let account1 = new Bank('Matt',1000);
// //Create an object with the following properties: name:'My account' balance:'0'
// let account2 = new Bank('My account',0);
// //Print both accounts
// account1.printAll();
// account2.printAll();
// //Withdraw 100 from Matt's and deposit 100 into My account
// account1.withdraw(100);
// account2.deposit(100);
// //Print again
// account1.printAll();
// account2.printAll();