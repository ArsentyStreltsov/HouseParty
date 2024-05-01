import React from 'react';
import '../styles/styles.css';

const RulesScreen = () => {
  return (
    <div className="game_screen">
      <div className="heading_div">
        <img className="heading_img" src="images/heading.png" alt="heading_img" />
      </div>

      <div className="main_screen_buttons">
        <h1>here will be rules <br /><br /></h1>
        <div className="back_button">
          <button className="no_button button" onClick={() => window.history.back()}>back</button>
        </div>
      </div>
    </div>
  );
};

export default RulesScreen;
