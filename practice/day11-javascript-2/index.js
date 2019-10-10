const accountnr = prompt( "What's your account number?: ", 0 );
const accountnr_int = parseInt( accountnr );
/* const withdraw = prompt( "How much would you like to withdraw?: ", 10 ); */

let accounts = [
    { nr: 000256784, balance: 790 },
    { nr: 000986056, balance: 5600 },
    { nr: 001546238, balance: 78065 },
    { nr: 030987456, balance: 120910 },
]


const balance = accounts.find( ( key ) => key.nr === accountnr_int ).balance;

/* const afterWithdraw = accounts.find( ( key ) => key.nr === accountnr_int ).balance - withdraw; */

document.write( "Your balance was: " + balance + "Your balance is now: " );
console.log( "Your balance was: " + balance + "Your balance is now: " );


