const recentDays =  document.getElementById("Days");
const recentHours = document.getElementById("Hours");
const recentMinutes =  document.getElementById("Minutes");
const recentSeconds =  document.getElementById("Seconds");
const newYears = "1 Jan 2024";
function countDown() {
    const currentDate = new Date();
    const newYearsDate = new Date(newYears);
    const totalSeconds = (newYearsDate - currentDate) / 1000; // difference whole seconds ---> milli seconds to seconds
    const days = Math.floor((totalSeconds / 3600 / 24)); // each hour is 3600 seconds and each day is 24 hours
    const hours = Math.floor((totalSeconds / 3600)%24); // each hour is 3600 seconds and in one day we have only 24 hours
    const minutes = Math.floor((totalSeconds / 60)%60); // each minutes is 60 seconds and in one hour we have only 60 minutes
    const seconds = Math.floor(totalSeconds%60); // we have only 60 seconds each minute
    recentDays.innerText = "Days : "+timeFormat(days);
    recentHours.innerText = "Hours : "+timeFormat(hours);
    recentMinutes.innerText = "Minutes : "+timeFormat(minutes);
    recentSeconds.innerText = "Seconds : "+timeFormat(seconds);
}
timeFormat = (time) => time < 10 ? '0'+time:''+time ;


countDown();
setInterval(countDown, 1000); // start function each second