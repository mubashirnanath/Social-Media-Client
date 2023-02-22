/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import User from './routes/User/User';
import Admin from './routes/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route exact path="/*" element={<User />} />
          <Route exact path="/admin/*" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
