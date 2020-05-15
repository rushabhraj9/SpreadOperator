import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setContact(prevValue => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
          email: prevValue.email
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fname} {contact.lname}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fname" onChange={handleChange} placeholder="First Name" />
        <input name="lname" onChange={handleChange} placeholder="Last Name" />
        <input name="email" onChange={handleChange} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
