function generateRandombetween(min,max){
    min+Math.floor(Math.random()*(max-min+1))
}
function generateRandombetweencolorRGB(){
    const red=generateRandombetween(0,255);
    const green=generateRandombetween(0,255);
    const blue= generateRandombetween(0,255);
    return 'Rgb(${green},{blue},{red})';
}

console.log(generateRandombetweencolorRGB(0,255));
function startgame(){
randomcolor =generateRandomcolorRGB();
colotcodecontainer.innertext =randomcolor;
for (let i=0; i<6;i++){
    const div =document.currentelement('div');
    div.style.backgroundcolor=genereterandomecolor;
}
}