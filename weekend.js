let isSunny = true;
let isWeekend = true;
let isHoliday = true;

// we go to the beach if it is a weekend or a holiday and it is sunny
console.log(isWeekend || isHoliday && isSunny);

console.log( isSunny || isWeekend && isHoliday);