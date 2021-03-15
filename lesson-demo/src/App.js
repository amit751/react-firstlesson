
import './App.css';
import DayWeather from "./components/DayWeather.js";

class Day{
  constructor(imagePath,day,minTemp,maxTemp){
    this.imagePath = imagePath;
    this.day = day;
    this.minTemp = minTemp;
    this.maxTemp = maxTemp;
  }
}

const data = [
  new Day("https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png","sunday",2,31) , 
  new Day("https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png","monday",3,22) , 
  new Day("https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png","tuesday",11,20) ,
  new Day("https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png","wensday",22,26) , 
  new Day("https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png","thursday",5,24) , 
  new Day("https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png","friday",7,21) , 
  new Day("https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png","suterday",3,23) 
];


function App() {
  const week = data.map((item , index)=>{
    return <DayWeather imagePath = {item.imagePath} day = {item.day} minTemp = {item.minTemp} maxTemp = {item.maxTemp} key={index} />
  })
  return (
    <div className = "container">
    {week}
    </div>
  );
}

export default App;




