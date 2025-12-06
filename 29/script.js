function handleclick(el){
    console.log(el);
}
let currentplayer="x";
let arr=Array(9).fill(null);
function checkwinner(){
    if(
        (arr[0] !==null &&[0]==arr[1]==arr[2])||
    (arr[3] !==null &&[4]==arr[1]==arr[5])||
    (arr[6] !==null &&[7]==arr[1]==arr[8])
    
    )  {
document.write('winner is ${currentplayer}');

    }
}
function handleclick (el){
    const id=Number (el.id);
    if(arr[id] !== null) return;
    arr[id] =currentplayer;
    el.innertext=currentplayer;
    checkwinner();
    currentplayer =currentplayer==="x"?"0" :"x";

}