import { createRoot } from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import App from './App.jsx';
import { ContextApi } from './components/ContextApi.jsx';
import './index.css';


createRoot(document.getElementById('root')).render(
  <ContextApi>
    <App />
  </ContextApi>,
)
