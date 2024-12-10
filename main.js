const dayName = document.getElementById("dayName");
const monthName = document.getElementById("monthName");
const dayNumber = document.getElementById("dayNumber");
const yearNumber = document.getElementById("yearNumber");

// const currentDate = new Date();
// const stringDate = currentDate.toString();
// const day = currentDate.getDate();
// const month = currentDate.getMonth();
// const year = currentDate.getFullYear();

const day = new Date().toLocaleString('en-us', {weekday:'long'});
const month = new Date().toLocaleString('en-us', {month:'long'});
const date = new Date().getDate();
const year = new Date().getFullYear();



function displayDate(){
    dayName.innerText = day;
    monthName.innerText = month;
    dayNumber.innerText = date;
    yearNumber.innerText = year;
}

function displayTime(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString();
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    // const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    const timeString = `${hours}:${minutes}${meridiem}`;
    const time = document.getElementById("time").textContent = timeString;
}

displayDate()

displayTime()
setInterval(displayTime, 1000);


// console.log(year);



