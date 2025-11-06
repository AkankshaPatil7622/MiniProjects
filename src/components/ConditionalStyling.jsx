import React, { useState } from "react";

function ConditionalStyling() {
  const [temperature, setTemperature] = useState();
  const [colorStyle, setcolorStyle] = useState(false);

  function inputHandler(e) {
    setTemperature(e.target.value);
  }
  function checkTemp(e) {
    e.preventDefault();
    if (temperature < 20) {
      setcolorStyle(true);
    }
    else{
        setcolorStyle(false);
    }
  }
  return (
    <>
      <div className="container vh-100">
        <h2 className="text-center">Conditional styling</h2>
        <form onSubmit={checkTemp}>
          <input
            type="text"
            placeholder="Enter temperature"
            name="temperature"
            onChange={inputHandler}
            className="form-control w-50"
          />
          <input type="submit" value="Check" className="btn btn-warning m-3"/>
        </form>
       <h3 className={colorStyle?"text-primary":"text-danger"}>Temperature :- {temperature}°C</h3>
      </div>
    </>
  );
}

export default ConditionalStyling;
