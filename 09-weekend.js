// if it is a holiday OR if it is a weekend AND it is sunny at the same time,
// we'll go to the beach
let isHoliday = true;
let isWeekend = true;
let isSunny = false;

console.log("Go to the beach =>", isHoliday || isWeekend && isSunny);
// Assume that isHoliday = true, isWeekend = true, isSunny = false
//                           => true || true && false
//                           => true || false
//                           => true

console.log("Go to the beach (correct) =>",  (isHoliday || isWeekend) && isSunny);