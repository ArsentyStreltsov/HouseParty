import React from 'react';
import '../styles/styles.css';
import { Link } from 'react-router-dom';

const YesCardScreen = () => {
  return (
    <div className="game_screen">
      <div id="card">
        <div className="card_img">
          <img id="cardImage" src="" alt="Картинка карточки" />
        </div>
        <div className="back_button">
          <p id="cardImageText"></p>
        </div>
        <p id="cardText"></p>
        <div className="back_button">
          <Link to="/game"><button className="no_button button">end turn</button></Link>
        </div>
      </div>
    </div>
  );
};

export default YesCardScreen;
