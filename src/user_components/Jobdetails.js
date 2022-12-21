import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Jobdetails() {
  const { id } = useParams();
  const [jobData, setJobData] = useState({});
  const [jobTitle, setJobTitle] = useState();
  const [oid, setOid] = useState();
  const [loader, setLoader] = useState(true);
  const [applyStatus, setApplyStatus] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  // fetch user 
  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios.get(`http://localhost:8000/api/getuserbyid`, config)
    .then((response) => {
      setUser(response.data);
    })
    .catch((err) => alert("Some error occured"))
  })

  // hook for fetching all job details
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getjob/${id}`)
      .then((response) => {
        setJobData(response.data);
        setOid(response.data.oid);
        setJobTitle(response.data.jobTitle);
        setLoader(false);
      })
      .catch((err) => {
        alert("Some error occured");
        console.log(err);
      });
  }, []);

  // hook for checking if applied or not
  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .get("http://localhost:8000/api/checkjobapply", config)
      .then((response) => {
        const status = response.data.status;
        setApplyStatus(status);
      })
      .catch((err) => alert("Some error occured"));
  }, []);

  // function for apply job
  function handleApply() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .post(
        "http://localhost:8000/api/apply",
        { jid: id, oid: oid, jobTitle: jobTitle, userName: user.userName, userEmail: user.userEmail},
        config
      )
      .then((response) => {
        const data = response.data.status;
        if (data === true) {
          alert("Your have applied to job");
          navigate("/dashboard/myjobs");
        } else alert("Please upload your resume before applying");
      })
      .catch((err) => alert("Some error occured"));
  }

  return (
    <>
      <Header />
      <section class="section-box mt-50">
        {loader == true ? (
          <></>
        ) : (
          <div class="container">
            <div
              class=""
              style={{
                borderBottom: ".5px solid #e6e6e6",
                marginBottom: "60px",
              }}
            >
              <div class="row mt-10">
                <div class="col-lg-8 col-md-12">
                  <h5 class="f-18">
                    {jobData.oname}
                    <span class="card-location font-regular ml-20">
                      {jobData.location}
                    </span>
                  </h5>
                  <p class="mt-5 font-md color-text-paragraph-2 mb-15">
                    Our Mission to make working life simple
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="content-single">
                  <div class="tab-content">
                    <div
                      class="tab-pane fade show active"
                      id="tab-about"
                      role="tabpanel"
                      aria-labelledby="tab-about"
                    >
                      <h4>Description</h4>
                      <p>{jobData.jobDescription}</p>
                      <h4>Responsibilities</h4>
                      <ul>
                        {jobData.responsibilities.map((data) => {
                          return <li>{data.name}</li>;
                        })}
                      </ul>

                      <h4>Requirements</h4>
                      <ul>
                        {jobData.requirements.map((data) => {
                          return <li>{data.name}</li>;
                        })}
                      </ul>

                      <h4>Qualification</h4>
                      <ul>
                        {jobData.qualification.map((data) => {
                          return <li>{data.name}</li>;
                        })}
                      </ul>

                      <h4>Skills & Experience</h4>
                      <ul>
                        {jobData.skills.map((data) => {
                          return <li>{data.name}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                <div class="sidebar-border">
                  <div class="sidebar-heading">
                    <div class="avatar-sidebar">
                      <div class="sidebar-info pl-0">
                        <span class="sidebar-company">{jobData.oname}</span>
                        <span class="card-location">{jobData.location}</span>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar-list-job">
                    <ul>
                      <li>
                        <div class="sidebar-icon-item"></div>
                        <div class="sidebar-text-info">
                          <span class="text-description">Company field</span>
                          <strong class="small-heading">
                            Software development
                          </strong>
                        </div>
                      </li>
                      <li>
                        <div class="sidebar-icon-item"></div>
                        <div class="sidebar-text-info">
                          <span class="text-description">Location</span>
                          <strong class="small-heading">
                            {jobData.location}
                          </strong>
                        </div>
                      </li>
                      <li>
                        <div class="sidebar-icon-item"></div>
                        <div class="sidebar-text-info">
                          <span class="text-description">Job Type</span>
                          <strong class="small-heading">
                            {jobData.jobType == "1"
                              ? "Full Time"
                              : jobData.jobType == "2"
                              ? "Part Time"
                              : "Intern Ship"}
                          </strong>
                        </div>
                      </li>
                      <li>
                        <div class="sidebar-icon-item"></div>
                        <div class="sidebar-text-info">
                          <span class="text-description">Job Category</span>
                          <strong class="small-heading">
                            {jobData.jobCategory}
                          </strong>
                        </div>
                      </li>
                      <li>
                        <div class="sidebar-icon-item"></div>
                        <div class="sidebar-text-info">
                          <span class="text-description">Job Experience</span>
                          <strong class="small-heading">
                            {jobData.jobexperience} Years
                          </strong>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <div class="sidebar-list-job">
                    <ul class="ul-disc">
                      <li>Phone: +91 8788388573</li>
                      <li>Email: harsh@gmail.com</li>
                    </ul>
                  </div> */}
                  {applyStatus == false ? (
                    <button
                      className="btn btn-primary"
                      style={{ marginTop: "30px", width: "150px" }}
                      onClick={handleApply}
                    >
                      Apply
                    </button>
                  ) : (
                    <div
                      class="sidebar-text-info"
                      style={{
                        marginTop: "20px",
                        color: "blue",
                        fontWeight: "700",
                        marginLeft: "35px",
                      }}
                    >
                      You Have applied to job
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Jobdetails;
