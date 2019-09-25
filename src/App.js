import React from 'react';
import './App.css';
import HeadingComponent from './HeadingComponent.js'
import FilterComponent from './FilterComponet';
import AllnewsComponent from './AllnewsComponent';


class App  extends React.Component{
  constructor(){
    super()
    this.state={
      allnewsobjects:null,
      NewsTitle:"",
      AuthorsName:"",
      NewsDiscription:"",
      PublishDate:"",
      lang:"en"
}
this.apifetch=this.apifetch.bind(this)
  }

apifetch(lang){
  fetch('https://api.currentsapi.services/v1/latest-news?language='+lang+'&apiKey=skUO175x3ywKnSmyy-Cbx0lsDp00s6xXf6cDJABjpPu0UekP')
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({allnewsobjects:result.news})
        console.log(result)
    },
    (error) => {
     console.log("error")
     
    }
  )
}
setlang=(ar)=>{
  alert(ar)
  this.setState(state=>({lang:ar}))
  this.apifetch(ar)
}

  componentDidMount() {
   this.apifetch(this.state.lang) 
   }
  render(){
   return(<><HeadingComponent/><div className="main-div"><FilterComponent click={this.setlang}/><div className="main-div-for-allnews"><AllnewsComponent allnews={this.state.allnewsobjects}/></div></div></>)
  }
}


export default App;
