

import { Route,Routes } from 'react-router-dom';
import Powerball from './components/Powerball';
function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Powerball/>} />
          </Routes>
 
    </div>
  );
}

export default App;
