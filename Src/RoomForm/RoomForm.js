import React from "react";
import PropTypes from "prop-types";

function RoomForm(props) {
  let containerClass = "form-group";
  if (props.errors.length > 0) {
    containerClass += "has-error";
  }
  return (
    <form onSubmit={props.onSubmit}>
      <div className={containerClass}>
        <label>Room Type</label>
        <div className="field">
          <input
            id="type"
            type="text"
            name="type"
            className="form-control"
            onChange={props.onChange}
            value={props.room.type}
          />
          {props.errors.types && (
            <div className="alert alert-danger">{props.errors.type}</div>
          )}
        </div>
      </div>

      <div className={containerClass}>
        <label>Charge</label>
        <div className="field">
          <input
            id="charge"
            type="text"
            name="charge"
            onChange={props.onChange}
            className="form-control"
            value={props.room.charge}
          />
            {props.errors.charge && (
          <div className="alert alert-danger">{props.errors.charge}</div>
        )}
        </div>
        
      </div>

      <div className={containerClass}>
        <label>Number of Rooms available</label>
        <div className="field">
          <input
            id="availability"
            type="text"
            name="availability"
            onChange={props.onChange}
            className="form-control"
            value={props.room.availability}
          />
        </div>
        {props.errors.availability && (
          <div className="alert alert-danger">{props.errors.availability}</div>
        )}
      </div>

      <input
        type="button"
        value="Add room"
        className="btn btn-danger"
        onClick={props.onSubmit}
      />
      
    </form>
  );
}

RoomForm.propTypes = {
  room: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
export default RoomForm;
