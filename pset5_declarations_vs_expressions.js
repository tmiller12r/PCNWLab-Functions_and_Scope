/*
    FOR EACH PROBLEM BELOW, IMPLEMENT THREE WAYS
    1. AS A FUNCTION DECLARATION
    2. AS AN ANONYMOUS FUNCTION EXPRESSION
    3. AS A NAMED FUNCTION EXPRESSION
    
    RUN BOTH TO ENSURE THEY WORK PROPERLY
*/


/*
    PROBLEM 1:
        Write a function that takes THREE params: a, b, c
        return the remainder of the sum of a,b,c divided by 3
*/ 
function findRemainder (a, b, c) {
    return (a + b + c) % 3 
}
console.log (findRemainder (5, 5, 2))

const modThree = function (a, b, c) {
    return (a + b + c) % 3;
}
console.log (modThree (5, 6, 2))


const modTree = (a, b, c) => {
    return (a + b + c) % 3;
}
console.log (modTree (9, 4, 1))

const remainderOfSum3 = (a,b,c) => (a+b+c)%3;


/*
    PROBLEM 2:
        Write a function that takes THREE params: a,b,c
        return a string that addes a dash in between them.
        
        so, if a = 'one', b = 'two', c='three '
        then function will return 'one-two-three'
*/
function conCatThree (a, b, c) {
    return `${a}-${b}-${c}`;
}
console.log(conCatThree ('one', 'two', 'three'))

const connectWithHyphen = function (a, b, c) {
    return `${a}-${b}-${c}`;
}
console.log(connectWithHyphen ('one', 'two', 'three'))

const connectWitHyphen = (a, b, c) => {
    return `${a}-${b}-${c}`;
}
console.log (connectWitHyphen ('one', 'two', 'three'))
/*
    PROBLEM 3:
        Write a function that takes NO params
        return a random number between 0 and 10 
        (doesn't have to be a whole number tho)
*/
function randomNumber (){
    return Math.random() * 10;
}
console.log (randomNumber())
