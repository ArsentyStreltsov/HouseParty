import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [showMainContent, setShowMainContent] = useState(false);
    const [hideVideo, setHideVideo] = useState(false);

    useEffect(() => {
        const video = document.getElementById('introVideo');
        video.onended = () => {
            setShowMainContent(true);
            setHideVideo(true); // Устанавливаем состояние, чтобы скрыть видео
        };
    }, []);

    return (
        <div>
            {!hideVideo && (
                <video 
                    id="introVideo"
                    src="images/Intro Animation.mp4"
                    autoPlay
                    muted
                    playsInline
                    webkit-playsinline="true"
                    style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}
                />
            )}

            {showMainContent && (
                <div className="game_screen">
                    <div className="heading_div">
                        <img className="heading_img" src="images/heading.png" alt="heading_img" />
                    </div>
                    <div className="main_screen_buttons">
                        <div className="button_div">
                            <Link to="/game">
                                <button className="test_button button">play</button>
                            </Link>
                        </div>
                        <div className="button_div">
                            <Link to="/rules">
                                <button className="rules_button button">rules</button>
                            </Link>
                        </div>
                        <div className="button_div">
                            <a href="https://fpressers.com/" target="_blank">
                                <button className="button">our website</button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
