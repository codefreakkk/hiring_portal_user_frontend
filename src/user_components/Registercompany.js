import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../utilities/style.css";
import logo from "../user_assets/imgs/page/contact/img.png";

function Registercompany() {
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
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="phone"
                        placeholder="Organization Location"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <label>Upload Organization Docs</label>
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="phone"
                        placeholder=""
                        type="file"
                      />
                    </div>
                  </div>
                  <div><button class="submit btn btn-send-message" type="submit">Submit</button></div>
                </div>
              </form>
              <p class="form-messege"></p>
            </div>

          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Registercompany;
