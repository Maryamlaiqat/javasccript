//iterators
for(const val of[1,2,3,4,5]){
    console.log(val);
}
function makeiterator(start=0,end=Infinity,step=1){
    let nextstart=start;
    let iterationcount=0;
    return{
        next(){
            if(iterationcount<end){
result={value:nextstart,done:false}
nextstart=nextstart+step;
iterationcount++;
            }
            return{value:iterationcount,done:true}
        },
    };
}
const myiterator=makeiterator(1,10,1);
let resule=myiterator.next();
while (!result.done){
    console.log(result.value);
    result=result.next();
}
for(constval of makeiterator(1,20,)){

}console.log(val);