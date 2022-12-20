import React from "react";
import "../utilities/style.css";

function Findjobslist({
  jobTitle,
  location,
  keywords,
  jobType,
  imageUrl,
  oname,
  desc
}) {
  return (
    <>
      <div class="col-xl-12 col-12">
        <div class="card-grid-2 hover-up">
          <span class="flash"></span>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="card-grid-2-image-left">
                <div class="image-box">
                  <img src={imageUrl} height="50" alt="jobBox" />
                </div>
                <div class="right-info">
                  <a class="name-job">{oname}</a>
                  <span class="location-small">{location}</span>
                </div>
              </div>
            </div>
            <div class="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
              <div class="pl-15 mb-15 mt-30">
                {keywords.map((data) => {
                  return <span style={{margin: "0 6px"}}>{data.name}</span>;
                })}
              </div>
            </div>
          </div>
          <div class="card-block-info">
            <h4>
              <a>{jobTitle}</a>
            </h4>
            <div class="mt-5">
              <span class="card-briefcase">
                {jobType == "1"
                  ? "Full Time"
                  : jobType.jobType == "2"
                  ? "Part Time"
                  : "Internship"}
              </span>
            </div>
            <p class="font-sm color-text-paragraph mt-10">
              {desc}
            </p>
            <div class="card-2-bottom mt-20">
              <div class="row">
                <div class="col-lg-7 col-7"></div>
                <div class="col-lg-5 col-5 text-end">
                  <div class="btn btn-apply-now">
                    <span className="apply-now"> Apply now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Findjobslist;
