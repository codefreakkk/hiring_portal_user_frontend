import React from "react";
import logo1 from "../user_assets/imgs/page/login-register/img-4.svg";
import logo2 from "../user_assets/imgs/page/login-register/img-3.svg";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <Header />
      <main class="main">
        <section class="pt-100 login-register">
          <div class="container">
            <div class="row login-register-cover">
            <div class="text-center">
          <p class="font-sm text-brand-2">Welcome back! </p>
          <h2 class="mt-10 mb-5 text-brand-1">Member Login</h2>
          <p class="font-sm text-muted mb-30">
            Access to all features. No credit card required.
          </p>
        </div>
              <div class="col-lg-4 col-md-6 col-sm-12 mx-auto">
                <form class="login-register text-start mt-20">
                  <div class="form-group">
                    <label class="form-label" for="input-1">
                      Username or Email address *
                    </label>
                    <input
                      class="form-control"
                      id="input-1"
                      type="text"
                      required=""
                      name="fullname"
                      placeholder="Steven Job"
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
                      required=""
                      name="password"
                      placeholder="************"
                    />
                  </div>
                  <div class="form-group">
                    <button
                      class="btn btn-brand-1 hover-up w-100"
                      type="submit"
                      name="login"
                    >
                      Login
                    </button>
                  </div>
                  <div class="text-muted text-center">
                    Don't have an Account?{" "}
                    <NavLink to="/register">Sign up</NavLink>
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
        <Footer />
      </main>
    </>
  );
}

export default Login;
