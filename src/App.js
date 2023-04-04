
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import AllPages from './components/MobileApp/AllPages';

function App() {
  return (
    <div className="">
     

     {/* for mobile app start */}
    <Routes>
        <Route path="/" element={<Home />}></Route>
    <Route path="/app" element={<AllPages/>}></Route>
    </Routes>
      {/* for mobile app end */}




    </div>
  );
}

export default App;
