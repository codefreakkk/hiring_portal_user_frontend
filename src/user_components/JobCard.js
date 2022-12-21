import React from "react";
import { NavLink } from "react-router-dom";

function JobCard({
  id,
  imageUrl,
  oname,
  jobTitle,
  jobType,
  location,
  keywords,
  jobDescription,
}) {
  return (
    <>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
        <div class="card-grid-2 hover-up">
          <div class="card-grid-2-image-left">
            <span class="flash"></span>
            <div class="image-box">
              <img src={imageUrl} height="50" alt="jobBox" />
            </div>
            <div class="right-info">
              <a class="name-job">{oname}</a>
              <span class="location-small">{location}</span>
            </div>
          </div>
          <div class="card-block-info">
            <h6>
              <a>{jobTitle}</a>
            </h6>
            <div class="mt-5">
              <span class="card-briefcase">
                {jobType == "1"
                  ? "Full Time"
                  : jobType.jobType == "2"
                  ? "Part Time"
                  : "Internship"}
              </span>
            </div>
            <p class="font-sm color-text-paragraph mt-15">
              {jobDescription.substring(0, 100)}...
            </p>
            <div class="mt-30">
              {keywords.map((data, index) => {
                return <a class="btn btn-grey-small mr-5">{data.name}</a>;
              })}
            </div>
            <div class="card-2-bottom mt-30">
              <div class="row">
                <div class="col-lg-7 col-7">
                  {/* <span class="card-text-price">$250</span>
                  <span class="text-muted">/Hour</span> */}
                </div>
                <div class="col-lg-5 col-5 text-end" style={{width: '100%'}}>
                  <NavLink to={`jobdetails/${id}`}>
                    <div
                      class="btn btn-apply-now"
                    >
                      Apply now
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
