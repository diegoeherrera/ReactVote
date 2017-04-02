import React, { Component } from 'react';


class PrintPosts extends Component {


   componentDidMount(){

  }

  render(){

    return(
      <ul>

        { this.props.forPrint.map(function(post){
        return  (<li key={post.id}><h4>{post.titulo}</h4>
                    <p>{post.bajada}</p>
                <button onClick={event=>this.props.vote("caca")}>Votar + </button>
                <button>Votar - </button>
                <p>Cantidad de Votos:</p>
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
