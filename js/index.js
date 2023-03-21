let input =75;
function studentsMarks(marks){
    
    if (marks >80) {
        return 'A';
    } else if(marks < 80 && marks > 60){
        return 'B';
    }else if(marks < 60 && marks >49){
        return 'C';
    }else if(marks < 50 && marks > 40){
        return 'D';
    }else if(marks < 40){
        return 'E';
    }  
     
}
console.log(studentsMarks(input));
 return studentsMarks(input);
