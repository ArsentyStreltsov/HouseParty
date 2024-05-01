import React from 'react';
import '../styles/styles.css';
import { Link } from 'react-router-dom';


const GameScreen = () => {
  return (
    <div className="game_screen your_turn">
      <div className="your_turn_div">
        <img className="heading_img" src="images/your_turn.png" alt="your_turn_img" />
      </div>

      <div className="main_screen_buttons">
        <div className="button_div">
          <Link to="/yescard"><button className="yes_button button">yes</button></Link>
        </div>

        <div className="button_div">
          <Link to="/nocard"><button className="no_button button">no</button></Link>
        </div>

        <div className="button_div">
          <button className="no_button button" onClick={() => window.location.href = '/'}>home</button>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
