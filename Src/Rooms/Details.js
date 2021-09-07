import React, { useEffect, useState } from "react";
import DetailsForm from "../RoomForm/DetailsForm";
import * as roomApi from "../apicalls/roomApi";


const Details = (props) => {
  const [room, setRoom] = useState({
    id: null,
    type: "",
    charge: null,
    availability: null,
  });
 
  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      roomApi.getRoombySlug(slug).then((_room) => setRoom(_room));
    }
  }, []);

  
  function handleChange({ target }) {
    setRoom({
      ...room,
      [target.name]: target.value,
    });
  }


  function handleDelete(evt) {
    evt.preventDefault();
    roomApi.deleteRoom(room.id).then(() => {
      props.history.push("/rooms");
      alert("Room deleted..");
    });
  }

  return (
    <>
      <h2>{room.type}</h2>
      <p>{room.charge}</p>
      <p>{room.availability}</p>
      <p>{room.slug}</p>
    
      <DetailsForm
        room={room}
        onChange={handleChange}
        onDelete={handleDelete}
      />
    </>
  );
};

export default Details;
