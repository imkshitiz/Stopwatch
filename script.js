const clock = document.querySelector(".clock");

let IntervalId;
 let hr=0;
 let min=0;
 let sec=0;


const startstopwatch = () =>{

     IntervalId = setInterval(()=>{
    if(sec < 59) sec++;
    else if(min >= 59){
        hr++;
        min=0;
    }
    else{
        sec =0;
        min++;
    }
    const seconds = String(sec).padStart(2,"0");
    const minutes = String(min).padStart(2,"0");
    const hours = String(hr).padStart(2,"0");

    clock.innerText = (`${hours}:${minutes}:${seconds}`);

},1000);
};

const stopStopwatch = () =>{
   clearInterval(IntervalId);
}