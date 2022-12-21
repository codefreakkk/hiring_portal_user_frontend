import axios from "axios";
import React, { useEffect, useState } from "react";
import profile from "../../images/cv.png";
import { Oval } from "react-loader-spinner";

function Myprofile() {
  const [file, setFile] = useState(null);
  const [id, setId] = useState();
  const [loader, setLoader] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [qual, setQual] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [resume, setResume] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .get("http://localhost:8000/api/getuserbyid", config)
      .then((response) => {
        const data = response.data;
        setName(data.userName);
        setEmail(data.userEmail);
        setId(data._id);
        setEmail(data.userEmail);
        setNumber(data.contact);
        setGender(data.gender);
        setQual(data.qual);
        setAddress(data.address);
        setState(data.state);
        setCity(data.city);
        setLoader(false);
        setResume(data.cvUrl);
      })
      .catch((err) => alert("Some error occured"));
  }, []);

  // set file
  function toggleFile(e) {
    e.preventDefault();
    setFile(e.target.files[0]);
  }

  // function for updating profile
  function handleSubmit(e) {
    e.preventDefault();
    // validate file
    if (file == null) {
      alert("Please select Your CV");
      return;
    }
    const token = localStorage.getItem("token");
    setLoader(true);
    axios({
      method: "POST",
      url: "http://localhost:8000/api/updateuser",
      headers: { "Content-Type": "multipart/form-data", Authorization: token },
      data: {
        id: id,
        name,
        email,
        number,
        gender,
        qual,
        address,
        state,
        city,
        cv: file,
      },
    })
      .then((response) => {
        const data = response.data;
        setName(data.userName);
        setEmail(data.userEmail);
        setId(data._id);
        setEmail(data.userEmail);
        setNumber(data.contact);
        setGender(data.gender);
        setQual(data.qual);
        setAddress(data.address);
        setState(data.state);
        setCity(data.city);
        setLoader(false);
        setResume(data.cvUrl);
        window.location.reload();
      })
      .catch((err) => {
        setLoader(false);
        alert("Some error occured");
      });
  }

  return (
    <div class="tab-content">
      <h3 class="mt-0 mb-15 color-brand-1">My Account</h3>
      <a class="font-md color-text-paragraph-2" href="#">
        Update your profile
      </a>
      {loader == true ? (
        <Oval
          height="40"
          width="40"
          color="#556de6cd"
          radius="20"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      ) : (
        <div class="tab-pane fade show active" id="tab-my-profile">
          <div class="mt-35 mb-40 box-info-profie">
            <div class="image-profile">
              <img src={profile} alt="jobbox" />
            </div>
            <div>
              {resume.length == 0 ? (
                <>Your CV is not Uploaded</>
              ) : (
                <>Your CV is uploaded</>
              )}
            </div>
            <div style={{ marginTop: "20px" }}>
              <input type="file" onChange={toggleFile} />
            </div>
          </div>
          <div class="row form-contact">
            <div class="col-lg-6 col-md-12">
              <div class="form-group">
                <label class="font-sm color-text-mutted mb-10">
                  Full Name *
                </label>
                <input
                  class=""
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label class="font-sm color-text-mutted mb-10">Email *</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label class="font-sm color-text-mutted mb-10">
                  Contact number
                </label>
                <input
                  class=""
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  type="text"
                />
              </div>
              <div class="form-group">
                <label class="font-sm color-text-mutted mb-10">Gender</label>
                <input
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label class="font-sm color-text-mutted mb-10">
                  Highest Qualification
                </label>
                <input
                  value={qual}
                  onChange={(e) => setQual(e.target.value)}
                  type="text"
                />
              </div>
              <div class="form-group">
                <label class="font-sm color-text-mutted mb-10">Experience</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="number"
                />
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="font-sm color-text-mutted mb-10">Address</label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="font-sm color-text-mutted mb-10">City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* <div class="border-bottom pt-10 pb-10 mb-30"></div>
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
            </div> */}
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
      )}
    </div>
  );
}

export default Myprofile;
