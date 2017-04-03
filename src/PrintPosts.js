import React, { Component } from 'react';


class PrintPosts extends Component {




  render(){

    

    return(
      <ul>

        { this.props.forPrint.map((post)=>{

        return  (<li key={post.id}>
                  <h4>{post.titulo}</h4>
                    <p>{post.bajada}</p>
                <button onClick={event=>this.props.vote(post.id,1)}>Votar + </button>
                <button onClick={event=>this.props.vote(post.id,-1)} >Votar - </button>
                <p>Cantidad de Votos: {post.votes}</p>
                <hr/>
                </li>
              )
    })
      }

      </ul>
    )
  }



}


export default PrintPosts
