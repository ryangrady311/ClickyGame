import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

var shuffle = require('shuffle-array');

var guessedArray = [];
var score = 0;
var highScore = 0;

 
// shuffle(collection);
 
// console.log(collection); // returns [4, 3, 1, 5, 2]

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };


  
  updateScore = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends = this.state.friends.filter(friend => friend.id !== id);
    const friends = this.state.friends;

    for (var i=0;i<guessedArray.length;i++){

      if (id == guessedArray[i])
      { 
        //Set highscore

        if (score > highScore){

          highScore = score;

        }

        //Clear the array

        guessedArray = [];

        alert("You lost :(, the high score is " + highScore);
        return this.setState({ friends });
      }

    }

    
    guessedArray.push(id);
    
    score = guessedArray.length;

    alert ("the score is " + score);
    
    // Set this.state.friends equal to the new friends array
    return this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {

    
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
       
        {shuffle(this.state.friends).map(friend => (
          <FriendCard 
            updateScore={this.updateScore}
            id={friend.id}
            key={friend.id}
            image={friend.image}>
            </FriendCard>
        ))}
      </Wrapper>
    );
  }

 
}

export default App;
