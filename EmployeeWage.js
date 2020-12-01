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
const TOTAL_WORKING_HRS=100;

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
let totalEmpHrs=0;
let totalWorkingDays=0;
// UC5: Calculating wages till a condition of 100 hours or 20 days is reached.
while(totalEmpHrs<=TOTAL_WORKING_HRS && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkingHours(empCheck);
}
let empWage=totalEmpHrs*WAGE_PER_HR;
console.log("Total Days: "+totalWorkingDays+" Total Hours: "+totalEmpHrs+" Total Wage: "+empWage);