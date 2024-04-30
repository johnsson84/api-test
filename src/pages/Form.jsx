import "./Base.css";
import "./Form.css";
import { useState } from "react";


const Form = () => {

  // Skapa en state variabel som håller flera värden
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Skapa en state array
  const [savedPersons, setSavedPersons] = useState([]);

  // Skapa en handle som tar hand om förändring i en input. 
  // Den ska hantera namn och värde och sedan spara till en array.
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log("name: " + name, "value: " + value);

    setPerson({ ...person, [name]: value });
  };

  // Skapa en handle som hindrar webbläsaren från att ladda om
  // och sedan skapa en ny variabel som behåller tidigare värden.
  // Spara i till en array och behåll tidigare värden.
  // Töm input fält
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { ...person };

    setSavedPersons([...savedPersons, newPerson]);

    setPerson({ firstName: "", lastName: "", email: "" });
  };

  // Skapa ett formulär där input använder "type name value onChange".
  // Skapa en knapp med submit och onClick.
  return (
    <div>
      <form className="form">
        <h1>Persons</h1>
        <div className="form-control">
          <label htmlFor="firstName">Firstname: </label>
          <br></br>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Lastname: </label>
          <br></br>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={person.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <br></br>
          <input
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <button className="form-btn" type="submit" onClick={handleSubmit}>
          Add person
        </button>
      </form>

      {/* Skapa en div som mappar ut från en array */}
      <div>
        {savedPersons.map((person) => {
          const { firstName, lastName, email } = person;
          return (
            <div className="form">
              <div className="item-row">
                <p>
                  {firstName} {lastName}
                </p>
                <p>{email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
