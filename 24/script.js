function add(a,b,c){
    return a+b+c;
}
console.log(add(2,3,20));
function add(a) {
    return function(b){
return function(c){
    return a+b+c;
};
    };
}
function sendautoemail(){
    console.log('sending e mail to${to}');
}
console.log(add(2)(3(10)));