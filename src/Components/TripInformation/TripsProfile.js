import React from 'react';
import TripsHeader from './TripsHeader';
import './Tripz.css';

function TripsProfile() {  
  const tripInfo = {
    userid: 1,
    destination: "Washington", 
    budget: 1000, 
    dateLeave: "2/10/2022", 
    dateArrive: "3/10/2022",
    currentZip: 92596,
    arrivalZip: 91205,
    volume: {
      couch: 10,
      tv: 5, 
    },
    tripPictureUrl: "https://blog.unpakt.com/wp-content/uploads/2015/05/19027281_xl-A-moving-truck-full-with-stuff-on-the-side-of-the-street..jpg",
  }

return (
  <div className='trip-container-wrapper'>
    <div className='trip-border'>
      <TripsHeader
        destination={tripInfo.destination}
      />
      <p className="date">{tripInfo.dateLeave} - {tripInfo.dateArrive}</p>
      <div className="pwrapper"></div>
      <p className="aboutTrip">Our Budget is: ${tripInfo.budget}. <br/>
      We currently live in the {tripInfo.currentZip} area and will be moving to {tripInfo.arrivalZip}. <br/>
      We currently are bringing about {tripInfo.volume.couch + tripInfo.volume.tv}cubic feet worth of stuff. <br/>
      Below is a picture of our stuff!
      </p>
    </div>
    <div className='trip-image-wrapper'>
        <img
          alt='picture of stuff for trip'
          className='trip-image'
          src={tripInfo.tripPictureUrl}
        />
      </div>
    </div>
  );
};

export default TripsProfile;