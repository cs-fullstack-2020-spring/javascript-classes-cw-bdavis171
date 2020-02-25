// //Problem 1:

// //Create a GitHubRepository class with the following properties: userName, filename, descriptionOfRepository, and code
// class GitHubRepository {
//     constructor(userName, fileName, descriptionOfRepository, code){
//         this.userName = userName;
//         this.fileName = fileName;
//         this.descriptionOfRepository = descriptionOfRepository;
//         this.code = code;
//     }
//     //Create a method that prints all properties
//     printAll(){
//         console.log(`Username: ${this.userName}\nFilename: ${this.fileName}\nDescription: ${this.descriptionOfRepository}\nCode: ${this.code}`);

//     }

// }
// //Create an object of the class
// let gitHubRepo1 = new GitHubRepository('Brandon','JavaScript_Classes','This is a code for classes','*Put some code here, please*');
// //Print the properties using the method
// gitHubRepo1.printAll();


// //Problem 2:

// //Create a Movie class with the following properties: movieName, rating, and yearReleased
// class Movie {
//     constructor(movieName, rating, yearReleased){
//         this.movieName = movieName;
//         this.rating = rating;
//         this.yearReleased =yearReleased;
//     }
//     //Create a method asking the user to change the rating
//     changeRating(){
//         this.rating = prompt("What's the new rating for this movie?");
//     }
//     //Create a method asking the user to change the year released
//     changeYearReleased(){
//         this.yearReleased = prompt("What's the new year released for this movie?");
//     }
//     //Create a method to print the properties
//     printAll() {
//         console.log(`Name: ${this.movieName}\nRating: ${this.rating}\nYear Released: ${this.yearReleased}`);
//     }

// }
// //Create an object for the class
// let movie1 = new Movie("Action Movie 4:Return of the Action","R",2039);
// //Print the properties using the method
// movie1.printAll();
// //Change the rating and the year released using the method
// movie1.changeRating();
// movie1.changeYearReleased();
// //Print the properties again
// movie1.printAll();


//Problem 3:

//Create a Student class with the following properties: studentName, codeSchoolCohort, and grades(grades should be an array of objects and each object should have the properties assignmentName and assignmentScore)
class Student {
    constructor(studentName,codeSchoolCohort,grades){
        this.studentName = studentName;
        this.codeSchoolCohort = codeSchoolCohort;
        this.grades = grades;
    }
    //Create a method that changes the student name
    changeStudentName(){
        this.studentName = prompt("What is the student's name?");
    }
    //Create a method that accepts an assignment name and assignment score and adds a grade object to the grades array
    addGrade(assignmentName, assignmentScore){
        let assignment = {name: assignmentName, score: assignmentScore};
        this.grades.push(assignment);
    }
}