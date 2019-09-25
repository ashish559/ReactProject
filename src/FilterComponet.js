import React from 'react';
import './App.css';

export default class FilterComponent extends React.Component{
constructor(props){
    super(props)
    this.state={
        lang:"",
    }
    this.showallnews=this.showallnews.bind(this)
    this.reset=this.reset.bind(this);
    this.handlechange=this.handlechange.bind(this)
}

showallnews(){
    alert("clicekd")
}
reset(){
alert("reseted")
this.props.click("en")
}
handlechange(e){
    this.setState({lang:e.target.value})
}

render(){
    return(<div className="filter-div">
        <button onClick={this.reset}>Reset</button>
        <label id="filter-heading1">Filter News</label>
        <hr/>
      <label for="Language" >Language</label>&emsp;
      <select className="search" onChange={this.handlechange}>
          <option value="en">English</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="fi">Finnish</option>
          <option value="ar">Arabic</option>
          
      </select>
      <br></br>
      <label>COUNTRY</label>
        <input name="country" type="text" placeholder="SELECT"></input>
        <br></br>
        <label>START DATE</label>
        <input name="Sdate" type="date" placeholder="dd/mm/yyyy"></input>
        <br></br>
        <label>END DATE</label>
        <input name="Edate" type="date" placeholder="dd/mm/yyyy"></input>
        <br></br>
        <button onClick={()=>this.props.click(this.state.lang)}><b><i>Show News</i></b></button>
       

    </div>)
}


}