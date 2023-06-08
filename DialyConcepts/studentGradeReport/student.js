

export class Student{
    constructor(firstName,lastName,rollNo){
        this.firstName =firstName
        this.lastName = lastName
        this.rollNo = rollNo
        this.marks = {}
        this.grade = ''
        this.totalMarksMarks = 0
    }


    addSubjectMarks(subject,marks){
        this.marks[subject] = marks
    }

    
    calculateGrade() {
        let totalMarks = 0
        let numSubjects =0
        for (const mark of Object.values(this.marks)) {
            totalMarks += mark;
             this.totalMarksMarks = totalMarks 
            numSubjects++;
          }
          
        const percentage = (totalMarks / Object.keys(this.marks).length).toFixed(2);
      
        let grade;
        switch (true) {
          case (percentage >= 90):
            grade = "A+";
            break;
          case (percentage >= 80):
            grade = "A";
            break;
          case (percentage >= 70):
            grade = "B";
            break;
          case (percentage >= 60):
            grade = "C";
            break;
          case (percentage >= 50):
            grade = "D";
            break;
          default:
            grade = "F";
        }
        
        this.grade = grade;
      }
      

      displayReport() {
        console.log(` \n Student Grade Report of Student Name: ${this.firstName} ${this.lastName} \n Roll Number : ${this.rollNo} \nsubject: Marks  `)
        for(const subject in this.marks){
            console.log(subject ,  this.marks[subject])
            
        }
        console.log(`Grade : `,this.grade)
        
    } 


}














