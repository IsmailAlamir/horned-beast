import React from "react";

class HornedBeast extends React.Component{
    render(){
        return(
<div>
    <h2>
    {this.props.title}
    </h2>
  
    <img src={this.props.img} alt={this.props.title} title={this.props.title}></img>

    <p>
{this.props.description} 
</p>


</div>


   ) }
}

export default HornedBeast ;

