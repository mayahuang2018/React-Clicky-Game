import React from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from './components/Wrapper'
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import dog from "./dog.json";
import './App.css';

class App extends Component {

  state = {
    dog,
    score: 0,
    highscore: 0,
    clickedDogs: []

  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.dog.forEach(dog => {
      dog.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  imageClick = id => {
    var clickedDogs = this.state.clickedDogs;
    if(clickedDogs.includes(id)){
      this.gameOver();
      console.log("game over")
      return
    }else{
      clickedDogs.push(id)
      
      if(clickedDogs.length === 12){
        alert(`Yay!You win!`);
        this.setState({score: 12, clickedDogs: []});
        console.log('You Win');
       return 
      }
    }

      this.setState({ dog, clickedDogs, score: clickedDogs.length});

      for (let i = dog.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [dog[i], dog[j]] = [dog[j], dog[i]];
      }


  return(
    <div>
  <Navbar
    score={this.state.score} highscore={this.state.highscore}
  />
  <Wrapper>
    <Jumbotron />
    <div className="wrapper">
      {this.state.dog.map(dog => (
        <FriendCard
          imageClick={this.imageClick}
          id={dog.id}
          key={dog.id}
          image={dog.image}
        />
      ))}
    </div>
  </Wrapper>
  <Footer />
  </div >
  );
}

export default App;
