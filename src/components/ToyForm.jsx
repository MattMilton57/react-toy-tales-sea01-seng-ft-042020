import React, { Component } from 'react';

class ToyForm extends Component {

  constructor(){
    super();
    this.state={
      name:'',
      image:'',
      likes:0
    }
  }

  handleChange = (e) => {
    e.preventDefault(e)
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleNewToy(this.state)
    this.setState({
      name:'',
      image:''
    })
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter a toy's name..." 
            value={this.state.name}
            className="input-text"
            onChange={e=>{this.handleChange(e)}}/>
          <br/>
          <input 
            type="text" 
            name="image" 
            placeholder="Enter a toy's image URL..." 
            value={this.state.image}
            className="input-text"
            onChange={e=>{this.handleChange(e)}}/>
          <br/>
          <input 
            type="submit" 
            name="submit" 
            value="Create New Toy" 
            className="submit"
            onClick={e => {this.handleSubmit(e)}} 
            />
        </form>
      </div>
    );
  }
}

export default ToyForm;
