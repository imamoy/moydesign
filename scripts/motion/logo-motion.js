// var animData = {
//     wrapper: document.getElementById('logomotion'),
//     animType: 'html',
//     renderer: 'canvas',
//     loop: true,
//     prerender: true,
//     autoplay: true,
//     path: '../../scripts/motion/logo-motion.json'
// };
// var anim = bodymovin.loadAnimation(animData);

var time = 8000;//倒數9秒
!function MyCounter(){
  if(time<=0){
    window.location.href="home.html";
  }else{
    console.log((time/1000) + " sec...");
    setTimeout(MyCounter, 1000);
  }
  time-=1000; 
}();
