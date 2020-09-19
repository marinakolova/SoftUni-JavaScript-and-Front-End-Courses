function stopwatch() {    
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    startBtn.addEventListener('click', ()=>{
        startBtn.disabled = true;
        stopBtn.disabled = false;
        let timeElem = document.getElementById('time');
        timeElem.innerHTML = '00:00';
        
       let timerIntervalId = setInterval(() => {
            let currentTimeStr = timeElem.innerHTML;
            let currentTime = parseTextTime(currentTimeStr);
            let newTime = {
                min: 0,
                sec : 0
             };
            if(currentTime.sec === 59){
                newTime.sec = 0;
                newTime.min = currentTime.min + 1;
            }else{
                newTime.sec = currentTime.sec + 1;
                newTime.min = currentTime.min;
            }
            let newTimeStr = createTextTime(newTime);
            timeElem.innerHTML = newTimeStr;
        }, 1000);
        stopBtn.addEventListener('click',()=> {
        clearInterval(timerIntervalId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
        });
    });
    function parseTextTime(str){
        let timeTokens = str.split(':');
        return {
            min : +timeTokens[0],
            sec: +timeTokens[1]
        }
    }
    function createTextTime(timeObj){
         let min = (timeObj.min < 10 ? '0' + timeObj.min : timeObj.min);
         let sec = (timeObj.sec < 10 ? '0' + timeObj.sec : timeObj.sec);
        
         return min + ':' + sec;
     }
}