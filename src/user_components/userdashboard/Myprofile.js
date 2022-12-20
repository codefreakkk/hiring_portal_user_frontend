import axios from "axios";
import React from "react";
import profile from "../../images/cv.png";

function Myprofile() {
  function handleSubmit() {
    const token = localStorage.getItem("token");
    if (token != null) {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      axios
        .post("http://localhost:8000/check", {}, config)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    } else alert("Some error occured");
  }

  return (
    <div class="tab-content">
      <div
        class="tab-pane fade show active"
        id="tab-my-profile"
        role="tabpanel"
        aria-labelledby="tab-my-profile"
      >
        <h3 class="mt-0 mb-15 color-brand-1">My Account</h3>
        <a class="font-md color-text-paragraph-2" href="#">
          Update your profile
        </a>
        <div class="mt-35 mb-40 box-info-profie">
          <div class="image-profile">
            <img src={profile} alt="jobbox" />
          </div>
          <a class="btn btn-apply">Upload CV</a>
          <a class="btn btn-link">Delete</a>
        </div>
        <div class="row form-contact">
          <div class="col-lg-6 col-md-12">
            <div class="form-group">
              <label class="font-sm color-text-mutted mb-10">Full Name *</label>
              <input class="form-control" type="text" value="Steven Job" />
            </div>
            <div class="form-group">
              <label class="font-sm color-text-mutted mb-10">Email *</label>
              <input
                class="form-control"
                type="text"
                value="stevenjob@gmail.com"
              />
            </div>
            <div class="form-group">
              <label class="font-sm color-text-mutted mb-10">
                Contact number
              </label>
              <input class="form-control" type="text" value="01 - 234 567 89" />
            </div>
            <div class="form-group">
              <label class="font-sm color-text-mutted mb-10">Bio</label>
              <textarea class="form-control" rows="4"></textarea>
            </div>
            <div class="form-group">
              <label class="font-sm color-text-mutted mb-10">
                Personal website
              </label>
              <input
                class="form-control"
                type="url"
                value="https://alithemes.com/"
              />
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="font-sm color-text-mutted mb-10">Country</label>
                  <input
                    class="form-control"
                    type="text"
                    value="United States"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="font-sm color-text-mutted mb-10">State</label>
                  <input class="form-control" type="text" value="New York" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="font-sm color-text-mutted mb-10">City</label>
                  <input class="form-control" type="text" value="Mcallen" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="font-sm color-text-mutted mb-10">
                    Zip code
                  </label>
                  <input class="form-control" type="text" value="82356" />
                </div>
              </div>
            </div>
            <div class="border-bottom pt-10 pb-10 mb-30"></div>
            <h6 class="color-orange mb-20">Change your password</h6>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="font-sm color-text-mutted mb-10">
                    Password
                  </label>
                  <input
                    class="form-control"
                    type="password"
                    value="123456789"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="font-sm color-text-mutted mb-10">
                    Re-Password *
                  </label>
                  <input
                    class="form-control"
                    type="password"
                    value="123456789"
                  />
                </div>
              </div>
            </div>
            <div class="border-bottom pt-10 pb-10"></div>

            <div class="box-button mt-15">
              <button
                class="btn btn-apply-big font-md font-bold"
                onClick={handleSubmit}
              >
                Save All Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myprofile;
