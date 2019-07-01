var animData = {
    wrapper: document.getElementById('logomotion'),
    animType: 'html',
    loop: true,
    prerender: true,
    autoplay: true,
    path: '../../scripts/motion/logo-motion.json'
};
var anim = bodymovin.loadAnimation(animData);


//设定倒数秒数 
var count = 10;
//写一个方法，显示倒数秒数  数到0后跳转页面  
function countDown(){
    //将count显示在div中
    document.getElementById("num").innerHTML= count;
    //没执行一次，count减1
    count -= 1;
    //count=0时，跳转页面
    if(count==0){
        window.location.href="home.html";
    }
    //每秒执行一次,showTime()
    setTimeout("countDown()",1000);
}
//执行countDown方法
countDown();