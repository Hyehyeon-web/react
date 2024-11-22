import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS, JavaScript 로드는 상대경로로 지정합니다.
import './index.css';
import App from './App';

// 이미지 로드는 public 경로이므로 절대경로로 지정합니다.
// <img src="/images/background.png" alt="background" />

import reportWebVitals from './reportWebVitals';

// ReactDOM 컨테이너를 생성합니다.
const root=ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM은 render()로 화면을 그립니다.
root.render(
	<App />
);

reportWebVitals();