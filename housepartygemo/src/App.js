import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameScreen from './components/GameScreen';
import RulesScreen from './components/RulesScreen';
import NoCardScreen from './components/NoCardScreen';
import YesCardScreen from './components/YesCardScreen';
import Home from './components/Home';
import './styles/styles.css';

const App = () => {
    useEffect(() => {
        adjustGameScreen(); // Вызываем функцию при загрузке страницы
        window.addEventListener('resize', adjustGameScreen); // Вызываем функцию при изменении размера окна

        // Очищаем слушатель событий при размонтировании компонента
        return () => {
            window.removeEventListener('resize', adjustGameScreen);
        };
    }, []);

    // Функция для установки ширины игрового экрана
    function adjustGameScreen() {
        var height = window.innerHeight;
        var width = (height * 9) / 16;
        var gameScreen = document.querySelector('.game_screen');
        if (gameScreen) {
            gameScreen.style.width = width + 'px';
        }
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/game" element={<GameScreen />} />
                <Route path="/rules" element={<RulesScreen />} />
                <Route path="/nocard" element={<NoCardScreen />} />
                <Route path="/yescard" element={<YesCardScreen />} />
            </Routes>
        </Router>
    );
};

export default App;
