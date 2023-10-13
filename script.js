const currDate = document.querySelector('.Date');
const Time = document.querySelector('.Time');
const currIcon = document.querySelector('.Weather-icon');

// const tempIcon = "{%tempIcon%}";
// console.log(tempIcon);

// if(tempIcon == "Sunny")
// {
//   currIcon.innerHTML = "<i class='fa-thin fa-sun fa-fade fa-2xl'></i>";
// }
// else if(tempIcon == "Clouds")
// {
//   currIcon.innerHTML = <i class='fa-regular fa-cloud'></i>;
// }
// else if(tempIcon == "Rainy")
// {
//   currIcon.innerHTML = "<i class='fa-solid fa-cloud-showers-heavy'></i>";
// }
// else
// {
//   currIcon.innerHTML = <i class="fa-light fa-sun"></i>;
// }
const CurrDate = ()=>{
  var Month = [
    "Jan","Feb","Mar","Aprl","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
    
    const currmonth = new Date().getMonth();
    console.log(currmonth);
    const currDate = new Date().getDate();
  return `${Month[currmonth]}  ${currDate}`;
};


const currTime = ()=>{
  var Month = [
    "Jan","Feb","Mar","Aprl","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];

    const currmonth = new Date().getMonth();
    console.log(currmonth);
    const currDate = new Date().getDate();
    const currHours = new Date().getHours();
    const currMin = new Date().getMinutes();
    const currSec = new Date().getSeconds();

    if(currMin < 10)
    {
      currMin = "0" + currMin;
    }
    if(currSec < 10)
    {
      currSec = "0" + currSec;
    }
    // console.log(Month[currmonth]);

    return `${currHours}:${currMin}:${currSec}`;
}

currDate.innerHTML = currTime();
Time.innerHTML = currTime();