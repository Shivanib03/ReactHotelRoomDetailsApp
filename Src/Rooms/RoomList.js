import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as roomApi from "../apicalls/roomApi";
import {useHistory} from 'react-router';

const mystyle={
  backgroundColor:"powderblue",
  color:"black",
};


function RoomList(props) {
  function handleDelete(room) {
    //.preventDefault();
    roomApi.deleteRoom(room.id).then(() => {
     // useHistory().push("/rooms");
      alert("Room deleted..");
    });
  }
  return (
    <>
    <table className="table" style={mystyle}>
      <thead>
        <tr>
          <th>Type</th>
          <td>Charge</td>
          <td>Number of rooms available</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {props.rooms.map((room) => {
          return (
            <tr key={room.id}>
              <td>
                <Link to={"/room/" + room.slug} room={room}>{room.type}</Link>
              </td>
              <td>{room.charge}</td>
              <td>{room.availability}</td>
            </tr>

          );
        })}
      </tbody>
      
    </table>
    <Link className="btn btn-warning" to="/room" style={{color:"black",backgroundColor:'powderblue'}}> Add Room</Link>
    
    </>
  );
}

RoomList.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      charge: PropTypes.number.isRequired,
      availability: PropTypes.string.isRequired,
    })
  ).isRequired,
};

RoomList.defaultProps = {
  rooms: [],
};

export default RoomList;
