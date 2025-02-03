import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import DochakiContextProvider from './Context/DochakiContext.jsx';

createRoot(document.getElementById('root')).render(
    <DochakiContextProvider>
      <App />
    </DochakiContextProvider>
)