import './App.css';
import CodePage from './pages/codePage';
import HomePage from './pages/homePage'
import { Route,Routes } from 'react-router';
function App() {
  return (
    // <CodePage/>
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/game" element={<CodePage/>}></Route>
        <Route path="/rand" element={<CodePage/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
