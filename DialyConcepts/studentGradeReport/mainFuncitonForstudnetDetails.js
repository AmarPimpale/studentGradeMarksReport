
import * as rl from "../studentGradeReport/readlineInterface.js";
import * as stdFunction from "../studentGradeReport/sub.js";
export function mainFunctionToFillStudentInfo(){
console.log("create student Grade Report for creating report fill student details now : press 1");

    rl.rl1.question("Enter Your Choose :", (choice) => {
        if (choice == 1) {
          rl.rl1.question("Enter Student First Name : ", (firstName) => {
            rl.rl1.question("Enter student Last Name :", (last) => {
              rl.rl1.question("Enter studnet ROLL no.:", (rN) => {
                const studentInstance = stdFunction.stdClass(firstName, last, rN);
                console.log(studentInstance);
      
                console.log(
                  "Press 1.addSubjectMarks \npress And see your student grade report  "
                );
            
                rl.rl1.question("Enter your choice : ", (choice) => {
                  if (choice == 1) {
                    stdFunction.enterMarks(choice, studentInstance);
                   
                  } else if(choice==2){
                
                      console.log("report displying ....");
                      studentInstance.displayReport();
                      rl.rl1.close()
                  }
                  else{
                      console.log("Something is wrong input from user here")
                  }
                });
      
               
              });
            });
          });
        }
      });
}