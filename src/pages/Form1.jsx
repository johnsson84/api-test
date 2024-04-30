import "./Form.css";
import { useState } from "react";

const Form1 = () => {
  // Skapa en state variabel som håller flera värden
    const [person, setPerson] = useState({
        namn: "",
        email: "",
    })

  // Skapa en state array som ska hålla värden sparade från formuläret
    const [anmälda, setAnmälda] = useState([]);

  // Skapa en handle som tar hand om förändring i en input.
  // Den ska hantera namn och värde och sedan spara till en array.
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        console.log("Namn: " + name + " Email: " + value)

        setPerson({ ...person, [name]: value })
    }

  // Skapa en handle submit som hindrar webbläsaren från att ladda om
  // och sedan skapa en ny variabel som behåller tidigare värden.
  // Spara i till en array och behåll tidigare värden.
  // Töm input fält
    const handleSubmit = (e) => {
        e.preventDefault();

        const newPerson = { ...person }
        setAnmälda([ ...anmälda, newPerson])
    }

  // Skapa ett formulär där input använder "type name value onChange".
  // Skapa en knapp med submit och onClick.
  return (
    <div>
      <form className="form">
        <h1>Anmälan</h1>
        <div className="form-control">
          <label htmlFor="namn">Namn:</label>
          <br></br>
          <input 
            type="text" 
            id="namn" 
            name="namn" 
            value={person.namn} 
            onChange={handleChange}></input>
        </div>
        <div className="form-control">
          <label>Email:</label>
          <br></br>
          <input 
            type="text" 
            name="email" 
            value={person.email} 
            onChange={handleChange}></input>
        </div>
        <button className="form-btn" onClick={handleSubmit}>Skicka in!</button>
      </form>
      {/* Skapa en div som mappar ut från en array */}
      <div>
        {anmälda.map((anmäld) => {
            const {namn, email} = anmäld
            return (
                <div className="form">
                    <p>{anmäld.namn}<br></br>{anmäld.email}</p>
                </div>
            )
            
        })}
      </div>
    </div>
  );
};

export default Form1;
