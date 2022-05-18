import React from "react";
const Step2 = (props) => {
  const { data, handleChange, next, back } = props;
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Multistep Form</h3>
      <form className="reg">
        Street:
        <input
          type="text"
          name="street"
          placeholder="street name"
          value={data.street}
          onChange={handleChange}
        />
        City:
        <input
          type="text"
          name="city"
          placeholder="Your city"
          value={data.city}
          onChange={handleChange}
        />
        Postcode:
        <input
          type="number"
          name="postcode"
          placeholder="Pin code"
          value={data.postcode}
          onChange={handleChange}
        />
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
      </form>
    </div>
  );
};
export default Step2;
