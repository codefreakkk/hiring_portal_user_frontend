import axios from "axios";
import React, { useEffect, useState } from "react";
import Taskschild from "./Taskschild";

function Tasks() {
  const [loader, setLoader] = useState(true);
  const [interview, setInterview] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios.get(`http://localhost:8000/api/getallinterviews`, config)
    .then((response) => {
      setInterview(response.data)
      setLoader(false);
    })
    .catch((err) => console.log(err));

  }, []);

  return (
    <div class="tab-content">
      <h3 class="mt-0 mb-15 color-brand-1">Interview Details</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Interview Date</th>
            <th scope="col">Tasks</th>
          </tr>
        </thead>
        <tbody>
          {loader == true ? <></> : 
            interview.map((data, index) => {
              return (
                <Taskschild 
                  key={index}
                  oname={data.oname}
                  date={data.sheduleDate}
                  detail={data.interviewDetails}
                />
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
