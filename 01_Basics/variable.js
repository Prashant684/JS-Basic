const acct_id= 684 //constant cannot be changed
let acct_email ="0211csio054@niet.co.in"
var acct_pass = "1234" 
acct_city = "prayagraj"
let acct_state // here the value will be undefined

// acct_id=2 // this  will give an error as 'acct_id' is a 'constant'

acct_email="prashanthts684@gmail.com"
acct_pass="121"
acct_city="Delhi"

console.log(acct_id);

/*
prefer not to use 'var'
because it has issue in block scope and functional scope
*/
console.table([acct_email, acct_pass, acct_city, acct_state]);