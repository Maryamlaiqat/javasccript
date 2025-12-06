function main(){
    const name='maryam';
    function saymyname(){
console.log(name)
    }
    saymyname();
}
main()
const myname=document.getElementById("my-name");
  function maketextsizer(size){
    function changesize(){
        myname.style.fontsize=size;
    }
    return changesize;
  }
  const size12=maketextsizer(12);
  const size20=maketextsizer(12);
const size52=maketextsizer(12);
const size5=maketextsizer(12);
const mynmae=document.getElementById("my-name");
const btn=document.getElementById("my-btn");
     function makecounter(){
        let count=1;
        function increment(){
            console.log(count++);
        }
     }