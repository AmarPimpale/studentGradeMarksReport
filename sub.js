import * as studentClass from "../studentGradeReport/student.js";
import * as rl from "../studentGradeReport/readlineInterface.js";
import { mainFunctionToFillStudentInfo } from "./mainFuncitonForstudnetDetails.js";
import { Studentlist } from "./main.js";

export function stdClass(first, lastName, rollNumberhere) {
  const studentInstanceMain = new studentClass.Student(
    first,
    lastName,
    rollNumberhere
  );

 
     
  return studentInstanceMain;
}


function againAddSubjectAndMethod(sub,mark,studentInstance){
    studentInstance.addSubjectMarks(sub,mark)
    console.log("student Marks and subject Added Now ");
    }

export function enterMarks(choice,studentInstance){
    if (choice == 1) {
        rl.rl1.question("Enter subject:", (sub) => {
          rl.rl1.question("Enter marks :", (mark) => {
            //  console.log(typeof mark )
              againAddSubjectAndMethod(sub,parseInt (mark),studentInstance)
            studentInstance.calculateGrade();
            console.log("Grade is calculatiig");


    console.log("Want To Add Another Subject and Marks Then press 1 Again if not press 2 and continous....... :")
    rl.rl1.question("Enter your choice:",choice=>{
        if(choice==1){
            enterMarks(choice,studentInstance)
        }
        else if(choice==2){
            console.log("Grade is calculatiig");
            console.log("report displying ....");
            studentInstance.displayReport();
            Studentlist.push(studentInstance)
            console.log("Want to create another student Grade Report  press 1 otherwise press 2 for exit from here or want to see student list press 3")
            rl.rl1.question("Enter your choice : ",ch=>{
                if(ch==1){
                    mainFunctionToFillStudentInfo()
                }else if(ch==2){
                    console.log("Exit .......")
                    rl.rl1.close()
                }
                else{
                    console.log(Studentlist)
                    rl.rl1.close()
                }
            // rl.rl1.close()

            })
        }
        
    })

            
  
            

            
            
          });
        });
      }
      else{

      }
}


// export function  addSubjectMarksfunctio(subject,marks){
//     const studentAddSubMarkMethod =studentInstance.addSubjectMarks(subject,marks)
//     return studentAddSubMarkMethod
// }







// export function enterMarks(choice,studentInstance){
//     if (choice == 1) {
//         rl.rl1.question("Enter subject:", (sub) => {
//           rl.rl1.question("Enter marks :", (mark) => {
//               function againAddSubjectAndMethod(sub,mark){
//               studentInstance.addSubjectMarks(sub,mark)
//               }
//               againAddSubjectAndMethod(sub,mark)
//             //   console.log (stdFunction.addSubjectMarks(sub,mark))
//             console.log("student Marks and subject Added Now ");
//             console.log("Want To Add Another Subject and Marks Then press 1 Again if not press 2 and continous  :")
//             rl.rl1.question("Enter your choice : ",choice=>{
//               if(choice == 1){
//                   rl.rl1.question("Enter subject : ",sub=>{
//                       rl.rl1.question("Enter mark ",mark=>{
//                       againAddSubjectAndMethod(sub,mark)
//                       })
//                   })
//                   console.log("Your want to add marks again if yes press 1 otherwise press 2 :: ")
//                   rl.rl1.question("Enter choice :",choice1=>{
//                     if(choice1==1){
//                         rl.rl1.question("Enter subject :",sub=>{
//                             rl.rl1.question("Enter mark ::",marks=>{
//                         enterMarks()

//                             })
//                         })
//                     }
//                   })
//                   console.log("Grade is calculatiig")
//                   studentInstance.calculateGrade()
//                   console.log("report displying ....")
//                   studentInstance.displayReport()
//               }
//               else if(choice == 2){
    
//                   console.log("Grade is calculating")
//                   studentInstance.calculateGrade()
//                   console.log("Reprot displying ....")
//                   studentInstance.displayReport()
//               }
//     rl.rl1.close()
    
//             })
            
//           });
//         });
//       }
// }



// console.log("Your want to add marks again if yes press 1 otherwise press 2 :: ")
                 






// rl.rl1.question("Enter your choice : ",choice=>{
//     if(choice == 1){
//     enterMarks(choice,studentInstance)
       
//     }

// rl.rl1.close()

//   })