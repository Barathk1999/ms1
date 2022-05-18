import React from "react";
const Step3 = (props) => {
  const { data, handleChange, next, back } = props;
  return (
    <form className="ms3">
      <h3>Multistep Form</h3>
      <p>
        <label htmlFor="comments">Anything you want let us Know:</label>
        <br />
        <textarea
          name="comments"
          value={data.comments}
          onChange={handleChange}
        ></textarea>
      </p>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </form>
  );
};
export default Step3;
