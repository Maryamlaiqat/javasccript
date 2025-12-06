function add(m){
    return function(n){
        return function(b){
            return m+n+b;
        };
    };
}
function sendautoemail(to){
    return function(subject){
        return function(body){
            console.log('sending email to${subject}:${body');

        }
    }
}
let step1=sendautoemail("maryamlaiqat07@gmail.com");
let step2=("new order confirmation");
console.log(step2("hyyyy,here is something for u "));
console.log(add(2)(3)(4));