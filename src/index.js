import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируем 'react-dom/client' вместо 'react-dom'
import App from './App'; // Импортируйте App
import './index.css'; // Ваши стили

const root = ReactDOM.createRoot(document.getElementById('root')); // Создаем корневой узел
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
