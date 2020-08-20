import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

class App extends React.Component{

  state = {
    display: false,
    toyData: []
  }

  componentWillMount(){
    this.fetchToys()
  }

  fetchToys = () => {
    fetch ('http://localhost:3000/toys')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          toyData:res
      })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleNewToy = (e) => {
    fetch ('http://localhost:3000/toys', {
      method: 'POST',
      body: JSON.stringify({
        name:e.name,
        image:e.image,
        likes:e.likes
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },)
    .then (res => this.fetchToys(res))
  }

  donateToy = (e) => {
    fetch('http://localhost:3000/toys/'+e, {
      method: 'DELETE'
    })
    .then (res => this.fetchToys(res))
  }

  likeToy = (e) => {
    console.log('http://localhost:3000/toys/'+e)
    fetch ('http://localhost:3000/toys/'+e[0], {
      method: 'PATCH',
      body: JSON.stringify({
        likes:e[1]+1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },)
    .then (res => this.fetchToys(res))
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleNewToy={this.handleNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer like={this.likeToy} donate={this.donateToy} toys={this.state.toyData}/>
      </>
    );
  }
}

export default App;
