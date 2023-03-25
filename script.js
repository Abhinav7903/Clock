$(document).ready(function(){
    
        const deg = 6;
        const hr = document.querySelector('#hr');
        const mn = document.querySelector('#mn');
        const sc = document.querySelector('#sc');
        setInterval(()=>{
            var d= new Date();
            let day=d.getDay();
                
            let hh = d.getHours() * 30;
            let mm = d.getMinutes() * deg;
            let ss = d.getSeconds() * deg;
                        
            hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
                
    
        })
        
        // var song=document.getElementById("main");
        // var x=document.getElementById("fri")
        
        var playPromise = main.play();
        var play=fri.play();
        
        var d= new Date();
        let day=d.getDay();
        console.log(day);
        if(day==6){
        if (playPromise !== undefined) {
          playPromise.then(_ => {
            // Automatic playback started!
            // Show playing UI.
            
            main.pause();
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
          });
        }}
        else{
            if (play !== undefined) {
          play.then(_ => {
            // Automatic playback started!
            // Show playing UI.
            fri.pause();
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
          });
        }

        }
    
        
        
    
        
    

});


