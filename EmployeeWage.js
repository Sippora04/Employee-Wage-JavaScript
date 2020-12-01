const IS_ABSENT = 0;
let random = Math.floor(Math.random()* 10) % 2;
if(random == IS_ABSENT) {
    console.log("Employee is Absent");
    return;
}
else {
    console.log("Employee is Present");
}

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
const NUM_OF_WORKING_DAYS=20;
const TOTAL_WORKING_HRS=100;
    
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_FULL_TIME: return FULL_TIME_HRS;
                           break;
        case IS_PART_TIME: return PART_TIME_HRS;
                           break;
        default:    return 0;
    }
}

function calculateDailyWage(empHrs){
    return empHrs*WAGE_PER_HR;
}

let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArray=new Array();
    
while(totalEmpHrs<=TOTAL_WORKING_HRS && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs));
}
let empWage=calculateDailyWage(totalEmpHrs);
console.log("Total Days: "+totalWorkingDays+ " Total Hours: "+totalEmpHrs+ " Total Wage: "+empWage);