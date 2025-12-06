//highr order function and call back
function add(a,b,cb){
    let result= a+b;
    cb (result);
}
add(2,7,function(val){
    console.log(val);
});SSS