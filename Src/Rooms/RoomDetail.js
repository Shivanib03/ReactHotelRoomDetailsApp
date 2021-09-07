import React, { useEffect, useState } from "react";
import RoomForm from "../RoomForm/RoomForm";
import * as roomApi from "../apicalls/roomApi";

const RoomDetail = (props) => {
  const [errors, setErrors] = useState({});
  const [room, setRoom] = useState({
    id: null,
    type: "",
    charge: null,
    availability: null,
  });
  
  function ValidForm(params) {
    const _errors = {};
    if (!room.type) _errors.type = "Please enter the type of room";
    if (!room.charge) _errors.charge= "Please enter the charge/pay ";
    if (!room.availability) _errors.availability = "Please enter the number of rooms available";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  //spread operator ...
  function handleChange({ target }) {
    setRoom({
      ...room,
      [target.name]: target.value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    roomApi.saveRoom(room).then(() => {
      props.history.push("/rooms");
    });
  }

  return (
    <>
      <h2>Room Info</h2>
      <RoomForm
        errors={errors}
        room={room}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};
export default RoomDetail;
