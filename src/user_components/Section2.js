import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import JobCard from "./JobCard";

function Section2() {
  const [jobs, setJobs] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getfourjobs")
      .then((resoponse) => {
        setJobs(resoponse.data);
        setLoader(false);
      })
      .catch((err) => {
        alert("Some error occured");
        console.log(err);
      });
  }, []);

  return (
    <>
      <section class="section-box mt-50" style={{ paddingTop: "50px" }}>
        <div class="container">
          <div class="text-center">
            <h2 class="section-title mb-10 wow animate__animated animate__fadeInUp">
              Trending Jobs
            </h2>
            <p class="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
              Search and connect with the right candidates faster.{" "}
            </p>
          </div>

          <div class="mt-70">
            <div class="tab-content" id="myTabContent-1">
              <div
                class="tab-pane fade show active"
                id="tab-job-1"
                role="tabpanel"
                aria-labelledby="tab-job-1"
              >
                <div class="row">
                  {loader == true ? (
                    <></>
                  ) : (
                    jobs.map((data, index) => {
                      return (
                          <JobCard
                            key={index}
                            id={data._id}
                            imageUrl={data.imageUrl}
                            oname={data.oname}
                            jobTitle={data.jobTitle}
                            jobType={data.jobType}
                            location={data.location}
                            keywords={data.keywords}
                            jobDescription={data.jobDescription}
                          />
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
