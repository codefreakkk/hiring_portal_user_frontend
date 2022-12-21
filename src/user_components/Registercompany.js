import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../utilities/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registercompany() {
  const [oname, setOname] = useState();
  const [oemail, setOemail] = useState();
  const [ocontact, setOcontact] = useState();
  const [otype, setOtype] = useState();
  const [olocation, setOlocation] = useState();
  const [pass, setPass] = useState();
  const [count, setCount] = useState();
  const [rpass, setRpass] = useState();
  const navigate = useNavigate();

  function handleSubmit() {
    if (pass !== rpass) {
      alert("Password not match");
      return;
    }

    axios
      .post("http://localhost:8000/api/registerorganization", {
        oname: oname,
        oemail: oemail,
        ocontact: ocontact,
        otype: otype,
        olocation: olocation,
        password: pass,
        ocount: count,
      })
      .then((response) => {
        if (response.data.status == true) {
          alert("Company Registered");
          navigate("/");
        } else alert("Some error occured");
      })
      .catch((err) => alert("Please Fill all Details"));
  }

  return (
    <>
      <Header />
      <section class="section-box mt-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-40">
              <h2 class="mt-5 mb-10">Register Company</h2>
              <p class="font-md color-text-paragraph-2">
                The right move at the right time saves your investment. live
                <br class="d-none d-lg-block" /> the dream of expanding your
                business.
              </p>
              <form
                class="contact-form-style mt-30"
                id="contact-form"
                action="#"
                method="post"
              >
                <div
                  class="row wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div class="col-lg-6 col-md-6">
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="name"
                        placeholder="Organization Name"
                        type="text"
                        onChange={(e) => setOname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="company"
                        placeholder="Organization Email"
                        type="text"
                        onChange={(e) => setOemail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="email"
                        placeholder="Organization Contact"
                        type="text"
                        onChange={(e) => setOcontact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="phone"
                        placeholder="Organization Type"
                        type="text"
                        onChange={(e) => setOtype(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="phone"
                        placeholder="Organization Location"
                        type="text"
                        onChange={(e) => setOlocation(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="phone"
                        placeholder="Organization Size"
                        type="text"
                        onChange={(e) => setCount(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="input-style mb-20">
                      <input
                        class=""
                        name="phone"
                        placeholder="Password"
                        type="text"
                        onChange={(e) => setPass(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="phone"
                        placeholder="Re-enter password"
                        type="text"
                        onChange={(e) => setRpass(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* <div class="col-lg-6 col-md-6">
                    <label>Upload Organization Docs</label>
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="phone"
                        placeholder=""
                        type="file"
                      />
                    </div>
                  </div> */}
                  <div>
                    <button
                      class="submit btn btn-send-message"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <p class="form-messege"></p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Registercompany;
