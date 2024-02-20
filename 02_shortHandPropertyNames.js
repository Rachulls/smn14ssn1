// SHORTHAND PROPERTY NAMES
const a = 'sayHello';
const b = 50;
const c = [1, 2, 3];

// BEFORE
const objectLiteral = {
    a: a,
    b: b,
    c: c,
};

// name:'Raul'
console.log(objectLiteral);

// AFTER
const objectLiteralWithShortHand = {
    a,
    b,
    c,
}
console.log(objectLiteralWithShortHand);