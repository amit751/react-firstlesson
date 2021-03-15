import React ,  { Component} from "react";

export default class DayWeather extends Component{
    
    constructor(){
        super()
    }
    render(){
      return (
          <div className = "day-weather">
              <p>{this.props.day}</p>
              <img className = "image" src = {this.props.imagePath}/>
              <div className = "temp-container">
                  <span className = "min-temp">{this.props.minTemp}° </span>
                  <span className = "max-temp">{this.props.maxTemp}°</span>
              </div>
              
            </div>
        );



      
    }
}
DayWeather.defaultProps = {day: 1 , imagePath:1 , minTemp:1 ,maxTemp:1 };


