
// Imports
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx';
import axios from 'axios';

// Components

// styles
import './App.css';




function App () {

// Variables
const [photoGallery, setPhotoGallery] = useState([]);

// GET - /photoBook

function displayPhotos() {
  axios.get('/photoBook').then((response) => {
    console.log('GET /photoBook response:', response.data);

    setPhotoGallery(response.data);

  }).catch((error) => {
    console.log(`Error GET /photoBook`, error);
    alert('Error GET /photoBook');
  });
}

useEffect(() => {
  displayPhotos();
}, []);


  
  return (

    <div id="web-container">

      <Header />

      {
        photoGallery.map((photo) => 
        (<>
        <p>{photo.id}</p>
        <p>{photo.title}</p>
        <p>{photo.country}</p>
        <p>{photo.place}</p>
        <p>{photo.year}</p>
        </>))
      }

      {/* {JSON.stringify(photoGallery)} */}


    </div>

  );
}

export default App
