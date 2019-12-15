import React , { Component } from 'react'

class Welcome extends Component{
    constructor(){
        super();
        this.state={
          name:  "Kannan"
        }
    }
    ChangeStatus(){
        this.setState({
            name: this.state.name != "Seetha" ? "Seetha" : "Kavin"
        })
    }
    render(){
        const {name,roll}=this.props
        return <div><h1>Welcome {this.state.name} Class Component  Roll : {roll}</h1>
<button onClick={()=> this.ChangeStatus()}>Check State</button>
</div>
    }
}

export default Welcome