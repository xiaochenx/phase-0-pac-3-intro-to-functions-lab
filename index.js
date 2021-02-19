function shout(string) {
    return string.toUpperCase();
} 
'Hello!'.toUpperCase();

function whisper(string) {
    return string.toLowerCase();
} 
'HELLO!'.toUpperCase();

function logShout(string) {
    console.log(string.toUpperCase());
    
} 
'hello'.toUpperCase;

function logWhisper(string) {
    console.log( string.toLowerCase());
} 
'HELLO!'.toLowerCase();

function sayHiToGrandma(string){
    if (string === "hello"){
        return ('I can\'t hear you!');
    } else if (string === "HELLO"){
        return ('YES INDEED!');
    } else if (string === "I love you, Grandma."){
        return ('I love you, too.');
    }
};
console.log(sayHiToGrandma('hello'));
console.log(sayHiToGrandma('HELLO'));
console.log(sayHiToGrandma('I love you,Grandma.'));

