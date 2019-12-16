import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let appObject = {
    title: "Practicing React",
    subtitle: "Back to Basics"
  }

  let user = {
    name: "Jordan Owens",
    location: "Niagara Falls",
    favMovie: "Indiana Jones (Raiders Of The Lost Ark)",
    age: "33"
  }

  function getLocation(location) {
    if (location) {
      return <p>Location: {user.location}</p>;
    }
  }
  return (
    <>
      <div>
        <p><b>{appObject.title}</b></p>
        <p>{appObject.subtitle}</p>
      </div>

      <div>
        <h1>{user.name}</h1>
        <p>Favourite Movie: {user.favMovie}</p>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
      </div>
    </>
  );
}

export default App;
