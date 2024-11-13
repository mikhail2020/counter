import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';
import './style/index.css';



const root = createRoot(document.querySelector('#root') as HTMLDivElement);


root.render(<App />);









