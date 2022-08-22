import React from 'react';
import './App.css';
import { useState } from 'react';
import UserProfile from './Components/UserProfile/userprofile';
import TripsProfile from './Components/TripInformation/TripsProfile';

/* 
user: user id, email/username, password

x: user id, budget, dates (time frame for move, pickup, dropoff), current location, 
destination, volume of stuff

*/ 

const dummydata = {userid: 1, email: "jordan@gmail.com", username: "Jordan Wilia", password: 1234, profilePicUrl: "https://pbs.twimg.com/media/FaEdannXkAIaEyx?format=jpg&name=large"}
const tripInfo = {
  userid: 1, 
  budget: 1000, 
  dateLeave: "2/10/2022", 
  dateArrive: "3/10/2022",
  currentZip: 92596,
  arrivalZip: 91205,
  volume: {
    couch: 10,
    tv: 5, 
  }
}


function App() {

  const [user, setUser] = useState(dummydata);
  const [currentTrip, setCurrentTrip] = useState(tripInfo);

  return (
  <div className="userinfo">
    <UserProfile />
    <div>
    <TripsProfile /> 
  </div>
  </div>

);
}

export default App;
