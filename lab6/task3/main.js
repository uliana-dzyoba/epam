$(document).ready(function () {
    let startTick
    let now;
    let timer
    let isClicked=false;
    let hasStarted=false;
    $('.stop-go').click(function(){
      if(!hasStarted){
        startTick = new Date().getTime();
        timer = new moment.duration(1, "seconds").timer({
            loop: true,
          }, 
          function () { 
            now=new Date().getTime() - startTick;
            const time = new moment.duration(now, "milliseconds").format("mm:ss", {trim: false});
            $('.screen').text(time);
          });
        hasStarted=true;
        $(this).html('STOP');
      } else {
      if(isClicked){
        timer.start();
        isClicked=false;
        startTick = new Date().getTime()-now;
        $(this).html('STOP');
      } else {
        isClicked=true;
        timer.stop();
        $(this).html('GO');
        }
      }
    });

    $('.reset').click(function(){
      startTick = new Date().getTime();
      now=0;
      $('.screen').text('00:00');
      //now=new Date().getTime();
    });
});