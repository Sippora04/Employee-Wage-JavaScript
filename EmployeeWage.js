// UC1: Check Employee Presence 
const IS_ABSENT = 0;
let random = Math.floor(Math.random()* 10) % 2;
if(random == IS_ABSENT) {
    console.log("Employee is Absent");
    return;
}
else {
    console.log("Employee is Present");
}

// UC3: Refactoring the code to use function.
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
const NUM_OF_WORKING_DAYS=20;

// UC3:Function to get working hours
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
            break;
        case IS_PART_TIME:
            return PART_TIME_HRS;
            break;
        default:
            return 0;
    }
}
let empHrs = 0;
// UC4: Calculating wages for a month
for(let day=1; day<=NUM_OF_WORKING_DAYS;day++){
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs*WAGE_PER_HR;
console.log("Employee Wage: "+empWage);