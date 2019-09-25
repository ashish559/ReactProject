import React from 'react';
import './App.css';


export default class AllnewsComponent extends React.Component{
    constructor(props){
       
        super()
        this.state={
            allnews:null,
        }
        this.closebuttonfn=this.closebuttonfn.bind(this);
    }

    closebuttonfn(index){
          this.allnews2=this.state.allnews;
          this.allnews2.splice(index,1);
          this.setState({allnews:this.allnews2})
    }

    componentDidUpdate(){
        if(this.state.allnews===null||this.state.allnews!==this.props.allnews)
        this.setState({allnews:this.props.allnews})
    }

    render(){
        console.log(this.state.allnews)
        if(this.state.allnews!==null)
        return(this.state.allnews.map((item,index)=><ul><div className="all-news-div"><p id="title-para">{item.title}<span id="cross-span" onClick={()=>this.closebuttonfn(index)}>X</span></p><p>{item.author}&emsp;|&emsp;{item.published.substring(0,11)}</p>
        <div className="inner-div"><img src={item.image} className="imag" alt="Broken"></img><p className="desc-para">{item.description}</p></div>
        <p className="link"><a href={item.url}>Read full news here</a></p>
        </div></ul>))
        else
        return <p id="loading-para">Loading</p>
    }
}