import React from "react";
import PropTypes from "prop-types";

function DetailsForm(props) {
  let containerClass = "form-group";
  
  return (
    <>
    <form >
      
      <input
        type="button"
        value="Delete Movie"
        className="btn btn-danger"
        onClick={props.onDelete}
      />
    </form>
    </>
  );
}

DetailsForm.propTypes = {
  room: PropTypes.object.isRequired,
  onDelete:PropTypes.func.isRequired
};
export default DetailsForm;
