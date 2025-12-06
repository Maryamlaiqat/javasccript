//IIFE
//(function add(a,b){
    return a+b;
    console.log(a+b);
//})(2,3);
//(function say(){
    console.log("hey");
//})();
//(()=> console.log("i am Es6")());
//const value=(()=>100)();
//console.log(value);
//const data=(async()=> await fetch())
const atm=function(initalblance){
let balance=initalblance;
function withdraw(amt){
    if(amt>balance)
        console.log("are uou kidding?");
}  {
    balance-=amt;
    return balance;

}
}
return{withdraw};
const maryam=atm(5000);
console.log(maryam);

