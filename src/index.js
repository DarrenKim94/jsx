import React from "react";
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = React.createRoot(el);

function App() {
    return <h1>Hi There</h1>
}

root.render(<App />); 