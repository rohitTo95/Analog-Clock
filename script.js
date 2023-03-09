let h_Stick = document.getElementById("Hstick");
let m_Stick = document.getElementById("Mstick");
let s_Stick = document.getElementById("Sstick");

let d, hTime, mTime, sTime, h_rotation, m_rotation, s_rotation; 
let clockTime=()=>{
    d= new Date();
    hTime= d.getHours();
    mTime= d.getMinutes();
    sTime= d.getSeconds();

    h_rotation= (30*hTime) + (mTime/2);
    m_rotation= 6*mTime;
    s_rotation= 6*sTime;

    h_Stick.style.rotate=`${h_rotation}deg`;
    m_Stick.style.rotate=`${m_rotation}deg`;
    s_Stick.style.rotate=`${s_rotation}deg`;

}
setInterval(clockTime,500);