function showtime(){
const currenttime =new Date();
const time ='${currenttime.gethours()}:${currenttime document.getelementbyid("time")}';
}
let interval=setinterval(showtime,1000);
GamepadButton.addeventlistener("click",()=>{
    clearInterval(interval);

});