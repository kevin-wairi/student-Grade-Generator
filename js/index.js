    // assign all the elements to variables
    const txtInput = document.getElementById("txtInput");
    const btnSubmit = document.getElementById("btnSubmit");
    const txtOutput = document.getElementById("txtOutput");

// create an event listener to the submit button and calls the studentMarks function
    btnSubmit.addEventListener('click',studentsMarks)
// create an event listener to the submit button and calls the clearField function at the bottom
    btnSubmit.addEventListener('click',clearField)

       
// takes the input from txtInput and assigns it to the parameter marks to evaluate its grade.

function studentsMarks(marks){
    // if statement evaluate the grades
    if (marks >80) {
        return 'A';
    } else if(marks < 80 && marks > 60){
        return 'B';
    }else if(marks < 61 && marks >49){
        return 'C';
    }else if(marks < 50 && marks > 39){
        return 'D';
    }else if(marks < 40){
        return 'E';
    }  
const result= txtInput.value;
// assigns the output to txtOutput thru innerHTML method
txtOutput.innerHTML  = studentsMarks(result);
// console.log(studentsMarks(result)); for debugging

}
function clearField(){
    document.getElementById("txtInput").value="";
}
