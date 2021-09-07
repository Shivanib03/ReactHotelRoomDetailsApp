import React, { useEffect, useState } from "react";
import { getRooms } from "../apicalls/roomApi";
import RoomList from "./RoomList";
import { Link } from "react-router-dom";

function Rooms() {
  // useState
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms().then((_rooms) => setRooms(_rooms));
  }, []);

  return (
    <>
      <h4>Check out the available rooms here..</h4>
      
      <RoomList rooms={rooms} />
    </>
  );
}

export default Rooms;
