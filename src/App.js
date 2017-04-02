import React, { Component } from 'react';
import PrintPosts from './PrintPosts'
import './App.css';

class App extends Component {
constructor(props){
  super(props)

  this.state=({allPosts:[]})
}



     componentDidMount() {
          fetch('http://localhost:3001/posts')
          .then(response=>

          response.json()

          )
          .then(posts=>

          this.setState({allPosts:posts})

          )
     };

handleVote(id){
  console.log(id);
}

  render() {

    return (<PrintPosts forPrint={this.state.allPosts} vote={this.handleVote.bind(this)} />)

  }
}

export default App;
