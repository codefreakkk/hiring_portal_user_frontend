import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Myjobschild from "./Myjobschild";

function Myjobs() {
  const [jobs, setJobs] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .get("http://localhost:8000/api/getappliedjobs", config)
      .then((response) => {
        setJobs(response.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="tab-content">
      <h3 class="mt-0 mb-15 color-brand-1">My Applied Jobs</h3>
      <a class="font-md color-text-paragraph-2" href="#">
        {/* <input type="text" placeholder="Search my jobs" /> */}
      </a>
      {loader == true ? <></> : jobs.map((data, index) => {
        return (
          <NavLink to={`/jobdetails/${data.jid}`}>
          <Myjobschild
            key={index}
            id={data.jid}
            applied={data.appliedOn}
            jobTitle={data.jobTitle}
          />
          </NavLink>
        );
      })}
    </div>
  );
}

export default Myjobs;
