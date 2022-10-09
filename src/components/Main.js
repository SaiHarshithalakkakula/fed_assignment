import React, { Component } from "react";
import Sidebar from "./Sidebar";
import pro from "./pro";

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      time:""
    };
  }
  componentDidMount(){
    this.tick();
  }
  tick=()=>{
    const h=new Date().getHours();
    const m=new Date().getMinutes();
    const s=new Date().getSeconds();
    const uptime= h +":" +m+":"+s;
    this.setState({time:uptime});
  };
  componentDidUpdate(prevprops,prevstate){
    if(this.state.time!=prevstate.time){
      this.interval=setInterval(()=>{
        this.tick();
      },1000);
    }
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render(){
    return(
       <div>
        <div className="article">
        <h1><u>Display a digital clock in React JS</u></h1>
        <h3>The Code to Display Digital clock is:</h3>
          <p><pre>{`
          import React, { Component } from "react";
          class Main extends Component{
            constructor(props){
              super(props);
              this.state={
                time:""
              };
            }
            componentDidMount(){
              this.tick();
            }
            tick=()=>{
              const h=new Date().getHours();
              const m=new Date().getMinutes();
              const s=new Date().getSeconds();
              const uptime= h +":" +m+":"+s;
              this.setState({time:uptime});
            };
            componentDidUpdate(prevprops,prevstate){
              if(this.state.time!=prevstate.time){
                this.interval=setInterval(()=>{
                  this.tick();
                },1000);
              }
            }
            componentWillUnmount(){
              clearInterval(this.interval);
            }
            render(){
              return(
                 <div>
                  <div className="article">
                <h1><u>Display a digital clock in React JS</u></h1>
                THE OUTPUT IS:
                <h2>{this.state.time}</h2>
                <h3>The Code to Display Digital clock is:</h3><br></br>
                </div>
                </div>
                 );
              }
          }
          export default Main;`}</pre></p>
      <h3>THE OUTPUT IS:</h3>
      <h2>{this.state.time}</h2>
      </div>
      <Sidebar/>
      </div>
       );
    }
}
export default Main;
