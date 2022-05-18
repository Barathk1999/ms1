import React from "react";
const Step1 = (props) => {
  const { data, handleChange, next } = props;
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Multistep Form</h3>
      <form className="reg">
        Name:
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={data.name}
          onChange={handleChange}
        />
        Email:
        <input
          type="email"
          name="email"
          placeholder="Your mailid"
          value={data.email}
          onChange={handleChange}
        />
        DOB:
        <input
          type="date"
          name="DOB"
          placeholder="dd-mm-yyyy"
          value={data.date}
          onChange={handleChange}
        />
        Highest Qualification:
        <input
          type="text"
          name="Qualification"
          placeholder="Your qualification"
          value={data.qualification}
          onChange={handleChange}
        />
        Passout year:
        <input
          type="year"
          name="passout year"
          placeholder="Graduated year"
          value={data.passoutyear}
          onChange={handleChange}
        />
        Mobile no:
        <input
          type="number"
          name="Mobile no:"
          placeholder="Your Phone"
          value={data.Mobileno}
          onChange={handleChange}
        />
        <button onClick={next}>Next</button>
      </form>
    </div>
  );
};
export default Step1;
