import { useEffect } from 'react';
import './App.css';
import BrandContainer from './components/BrandContainer/BrandContainer';
import ExploreVehicles from './components/ExploreVehicles/ExploreVehicles';
import Navbar from './components/Navbar/Navbar';
import VideoContainer from './components/VideoContainer/VideoContainer';
import axios from 'axios';

function App() {

  useEffect(() => {
    let token = sessionStorage.getItem("User");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <>
      <Navbar />
      <BrandContainer />
      <ExploreVehicles />
      <VideoContainer />
    </>
  );
};

export default App;
