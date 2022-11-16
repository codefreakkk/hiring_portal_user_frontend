import React from "react";
import { NavLink } from "react-router-dom";
import back from "../../images/previous.png";

function Viewtask() {
  return (
    <>
      <div class="tab-content">
        <h3 class="mt-0 mb-15 color-brand-1">
            <NavLink to="../tasks">
          <span>
            {" "}
            <img
              src={back}
              style={{ marginRight: "12px", cursor: "pointer" }}
              height="18"
            />
          </span>
          </NavLink>
          Infosys - Task details
        </h3>

        <div
          className="mt-3"
          style={{ marginBottom: "2px", fontWeight: "700" }}
        >
          Description -{" "}
        </div>
        <div>
          harsh sachin said harsh sachin said harsh sachin said harsh sachin
          said harsh sachin said harsh sachin saidharsh sachin said harsh sachin
          said harsh sachin said harsh sachin said harsh sachin said harsh
          sachin said harsh sachin said harsh sachin said harsh sachin said
          harsh sachin saidharsh sachin said harsh sachin said harsh sachin said
          harsh sachin said
        </div>
        <div
          className="mt-3"
          style={{ marginBottom: "6px", fontWeight: "700" }}
        >
          Link -{" "}
        </div>
        <div>
          <input type="text" placeholder="Message" />
        </div>

        <div
          className="mt-3"
          style={{ marginBottom: "6px", fontWeight: "700" }}
        >
          Message -{" "}
        </div>
        <div>
          <input type="text" placeholder="Message" />
        </div>
        <button className="btn btn-primary" style={{ marginTop: "25px" }}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Viewtask;
