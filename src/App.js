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
          .then(posts=>{

          this.setState({allPosts:posts})
          //le agrego la key votes a todos los posts
          let post=this.state.allPosts.map(post=>post.votes=0)
          this.setState({allPosts:posts})

        })


     };

handleVote(id,num){

let posts=this.state.allPosts;

posts=posts.map((post)=>{
  if(post.id==id){
    post.votes+=num
    console.log(post.votes)
  }

})


}

  render() {

    return (<PrintPosts forPrint={this.state.allPosts} vote={this.handleVote.bind(this)} />)

  }
}

export default App;
