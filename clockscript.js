const hoursHand = document.querySelector("#hours");
const minutesHand = document.querySelector("#minutes");
const secondsHand = document.querySelector("#seconds");
function setTime(){
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const secondsDegrees = (seconds / 60)* 360; 
  const minutesDegrees = ((minutes / 60) * 360);
  const hoursDegrees = (hours / 12) * 360;
  
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
 hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  
}

setInterval(setTime, 1000);

