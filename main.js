
let balance = 1205.8943217;
let formattedBalance = balance.toFixed(4);

console.log( formattedBalance); 

formattedBalance = +formattedBalance;
console.log(typeof formattedBalance); 



let rawCargoData = '84.620kg (oversize)';
let integerWeight = parseInt(rawCargoData);

console.log(integerWeight);

let floatWeight = parseFloat(rawCargoData);

console.log(floatWeight); 

console.log(floatWeight - integerWeight); // 0.6200000000000045






let amount = 789450.5;

console.log(
    amount.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP'
    })
);

console.log(
    amount.toLocaleString('ja-JP', {
        style: 'currency',
        currency: 'JPY',
        currencyDisplay: 'code'
    })
);




let conversionRate = 0.08375;

console.log(
    conversionRate.toLocaleString('ru-RU', {
        style: 'percent',
        maximumFractionDigits: 1
    })
);











let currentSpeed = 119.864;

console.log(
    currentSpeed.toLocaleString('ru-RU', {
        style: 'unit',
        unit: 'kilometer-per-hour',
        unitDisplay: 'short',
        maximumFractionDigits: 2
    })
);







let fullCardNumber = '5331890045129988';

let firstFour = fullCardNumber.slice(0, 4);
let lastTwo = fullCardNumber.slice(-2);

console.log(firstFour + '******' + lastTwo);








let rawFeedback = '   Ужасный!сервис!Никому!не!советую!   ';
let cleanFeedback = rawFeedback.trim();

cleanFeedback = cleanFeedback.replaceAll('!', ' ');

cleanFeedback = cleanFeedback.toLowerCase();

console.log(cleanFeedback);










let subject = '   [ВАЖНО] Скидки до 90% только в 2026 году!   ';
let cleanSubject = subject.trimStart();


console.log(cleanSubject.startsWith('[ВАЖНО]')); 


cleanSubject = cleanSubject.trimEnd();

console.log(cleanSubject.endsWith('!')); 

console.log(
    cleanSubject.toLowerCase().includes('скидки')
); 









let rawLastName = '   иВАНоВ   ';

let cleanLastName = rawLastName.trim();


let firstLetter = cleanLastName[0].toUpperCase();

let remainingLetters = cleanLastName.slice(1).toLowerCase();

let formattedLastName = firstLetter + remainingLetters;

console.log(formattedLastName);







let configLine = 'database_host:production.internal.server.net';

let colonIndex = configLine.indexOf(':');

console.log(colonIndex); 


let host = configLine.slice(colonIndex + 1);

console.log(host);



console.log(host.slice(0, 3));
console.log(host.slice(-3));



