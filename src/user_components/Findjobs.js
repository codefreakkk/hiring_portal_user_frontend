import React, { useState } from "react";
import Header from "./Header";
import Findjobslist from "./Findjobslist";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Findjobs() {
  const [fullTime, setFullTime] = useState("");
  const [internShip, setInternShip] = useState("");
  const [partTime, setPartTime] = useState("");
  const [experience, setExperience] = useState(0);
  const [jobName, setJobName] = useState("");
  const [location, setLocation] = useState("");
  const [jobCat, setJobCategory] = useState("");

  return (
    <>
      <Header />
      {/* section 1 */}
      <main className="main">
        <section class="section-box-2">
          <div class="container">
            <div class="banner-hero banner-single banner-single-bg">
              <div class="block-banner text-center">
                <h3 class="wow animate__animated animate__fadeInUp">
                  <span class="color-brand-2">22 Jobs</span> Available Now
                </h3>
                <div
                  class="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  Lorem ips um dolor sit amet consectetur adipisicing elit. Vero
                  repellendus magni, <br class="d-none d-xl-block" />
                  atque delectus molestias quis?
                </div>
                <div
                  class="form-find text-start mt-40 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <form>
                    <input
                      type="text"
                      className="form-input input-keysearch mr-10"
                      onChange={(e) => setJobName(e.target.value)}
                      placeholder="Job name"
                    />
                    <input
                      class="form-input input-keysearch mr-10"
                      type="text"
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Location"
                    />
                    <button class="btn btn-default btn-find font-sm">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section class="section-box mt-30">
          <div class="container">
            <div class="row flex-row-reverse">
              <div class="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                <div class="content-page">
                  <div class="box-filters-job">
                    <div class="row">
                      <div class="col-xl-6 col-lg-5">
                        <span class="text-small text-showing">
                          Showing <strong>944 </strong>
                          jobs
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row display-list">
                    <NavLink to="jobdetails">
                      <Findjobslist />
                    </NavLink>
                    <NavLink to="jobdetails">
                      <Findjobslist />
                    </NavLink>
                    <Findjobslist />
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                <div class="sidebar-shadow none-shadow mb-30">
                  <div class="sidebar-filters">
                    <div class="filter-block head-border mb-30">
                      <h5>
                        Advance Filter{" "}
                        <a class="link-reset" href="#">
                          {/* Reset */}
                        </a>
                      </h5>
                    </div>
                    <div class="filter-block mb-20">
                      <h5 class="medium-heading mb-15">Job Type</h5>
                      <div class="form-group">
                        <ul class="list-checkbox">
                          <li>
                            <label class="cb-container">
                              <input
                                type="checkbox"
                                onChange={(e) => {
                                  e.target.checked == true
                                    ? setFullTime("1")
                                    : setFullTime("");
                                }}
                              />
                              <span class="text-small">Full Time</span>
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input
                                type="checkbox"
                                onChange={(e) => {
                                  e.target.checked == true
                                    ? setInternShip("3")
                                    : setInternShip("");
                                }}
                              />
                              <span class="text-small">Internship</span>
                              <span class="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input
                                type="checkbox"
                                onChange={(e) => {
                                  e.target.checked == true
                                    ? setPartTime("2")
                                    : setPartTime("");
                                }}
                              />
                              <span class="text-small">Part Time</span>
                              <span class="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="filter-block mb-30">
                      <h5 class="medium-heading mb-10">Experience Level</h5>
                      <div class="">
                        <ul class="list-checkbox">
                          <li>
                            <label class="">
                              <input
                                type="radio"
                                value="0"
                                onChange={(e) => setExperience(e.target.value)}
                                style={{ width: 25, height: 15 }}
                                name="exp"
                              />{" "}
                              0 Years
                            </label>
                          </li>
                          <li>
                            <label class="">
                              <input
                                type="radio"
                                value="1"
                                onChange={(e) => setExperience(e.target.value)}
                                style={{ width: 25, height: 15 }}
                                name="exp"
                              />{" "}
                              1 Years
                            </label>
                          </li>
                          <li>
                            <label class="">
                              <input
                                type="radio"
                                value="2"
                                onChange={(e) => setExperience(e.target.value)}
                                style={{ width: 25, height: 15 }}
                                name="exp"
                              />{" "}
                              2 Years
                            </label>
                          </li>
                          <li>
                            <label class="">
                              <input
                                type="radio"
                                value="3"
                                onChange={(e) => setExperience(e.target.value)}
                                style={{ width: 25, height: 15 }}
                                name="exp"
                              />{" "}
                              3 Years
                            </label>
                          </li>
                          <li>
                            <label class="">
                              <input
                                type="radio"
                                value="4"
                                onChange={(e) => setExperience(e.target.value)}
                                style={{ width: 25, height: 15 }}
                                name="exp"
                              />{" "}
                              4 Years
                            </label>
                          </li>
                          <li>
                            <label class="">
                              <input
                                type="radio"
                                value="5"
                                onChange={(e) => setExperience(e.target.value)}
                                style={{ width: 25, height: 15 }}
                                name="exp"
                              />{" "}
                              5 Years
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="filter-block mb-30">
                      <h5 class="medium-heading mb-15">Job Category</h5>{jobCat}
                      <div class="form-group select-style select-style-icon">
                        <select onChange={(e) => setJobCategory(e.target.value)}>
                          <option value="">Any</option>
                          <option value="frontend">Front End</option>
                          <option value="backend">Backend</option>
                          <option value="fullstack">Full Stack</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Findjobs;
