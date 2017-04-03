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
  }
  return post


})

this.setState({allPosts:[...posts]})



}

  render() {

    const orderedPosts= this.state.allPosts.sort((a,b)=> a.votes - b.votes).reverse()


    return (<PrintPosts forPrint={orderedPosts} vote={this.handleVote.bind(this)} />)

  }
}

export default App;
