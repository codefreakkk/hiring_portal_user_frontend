import { React, useState } from "react";
import logo1 from "../user_assets/imgs/page/login-register/img-1.svg";
import logo2 from "../user_assets/imgs/page/login-register/img-2.svg";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    if (
      fullName.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      rePassword.length == 0 ||
      password != rePassword
    ) {
      alert("Please fill all fields");
      return;
    }

    axios
      .post("http://localhost:8000/api/registeruser", {
        userName: fullName,
        userEmail: email,
        userPassword: password,
      })
      .then((response) => {
        if (response.data.status == true) {
          alert("You have registered successfully");
          navigate("/signup");
        } else if (response.data.status == false) {
          alert("Some error occured. User not registered");
        } else if (response.data.status == "email") {
          alert("User already registered");
        }
      })
      .catch((err) => alert("Some error occured. User not registered"));
  }

  return (
    <>
      <Header />
      <main class="main">
        <section class="pt-100 login-register">
          <div class="container">
            <div class="row login-register-cover">
              <div class="col-lg-4 col-md-6 col-sm-12 mx-auto">
                <div class="text-center">
                  <h2 class="mt-10 mb-5 text-brand-1">Start for free Today</h2>
                </div>
                <form class="login-register text-start mt-20" action="#">
                  <div class="form-group">
                    <label class="form-label" for="input-1">
                      Full Name *
                    </label>
                    <input
                      class="form-control"
                      id="input-1"
                      type="text"
                      onChange={(e) => setFullName(e.target.value)}
                      value={fullName}
                      name="fullname"
                      placeholder="Your name"
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="input-2">
                      Email *
                    </label>
                    <input
                      class="form-control"
                      id="input-2"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name="emailaddress"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="input-4">
                      Password *
                    </label>
                    <input
                      class="form-control"
                      id="input-4"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      placeholder="************"
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="input-5">
                      Re-Password *
                    </label>
                    <input
                      class="form-control"
                      id="input-5"
                      type="password"
                      value={rePassword}
                      onChange={(e) => setRePassword(e.target.value)}
                      name="re-password"
                      placeholder="************"
                    />
                  </div>
                  {/* <div class="login_footer form-group d-flex justify-content-between">
                    <label class="cb-container">
                      <input type="checkbox" />
                      <span class="text-small">Agree our terms and policy</span>
                      <span class="checkmark"></span>
                    </label>
                    <a class="text-muted" href="page-contact.html">
                      Lean more
                    </a>
                  </div> */}
                  <div class="form-group">
                    <button
                      class="btn btn-brand-1 hover-up w-100"
                      type="button"
                      onClick={handleSubmit}
                      name="login"
                    >
                      Submit &amp; Register
                    </button>
                  </div>
                  <div class="text-muted text-center">
                    Already have an account?{" "}
                    <NavLink to="/signup">
                      <a>Sign in</a>
                    </NavLink>
                  </div>
                </form>
              </div>
              <div class="img-1 d-none d-lg-block">
                <img class="shape-1" src={logo1} alt="JobBox" />
              </div>
              <div class="img-2">
                <img src={logo2} alt="JobBox" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Register;
