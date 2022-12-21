import React from "react";
import FormattedDate from "./FormattedDate";

export default function CityCard(props) {
  return (
    <div className="CityCard">
      <div className="card">
        <div className="current-city">
          <h1 className="current-city"> {props.data.city} </h1>
          <div>
            <FormattedDate date={props.data.date} />
          </div>
        </div>
      </div>
    </div>
  );
}
