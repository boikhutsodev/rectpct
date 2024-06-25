import React from "react";

const User = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.img} />
      <h1>Name: {props.name}</h1>
      <h3>Hobbies: {props.hobbies}</h3>
      <p>{props.realData.name}</p>
      <p>{props.realData.location}</p>
    </section>
  );
};

export default User;
