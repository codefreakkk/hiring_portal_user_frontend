import React from "react";
import logo from "../user_assets/imgs/page/contact/img.png";
import Header from "../user_components/Header";
import Footer from "../user_components/Footer"

function Contact() {
  return (
    <>
    <Header/>
      <section class="section-box mt-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-40">
              <span class="font-md color-brand-2 mt-20 d-inline-block">
                Contact us
              </span>
              <h2 class="mt-5 mb-10">Get in touch</h2>
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
                        placeholder="Enter your name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="company"
                        placeholder="Comapy (optioanl)"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="email"
                        placeholder="Your email"
                        type="email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="input-style mb-20">
                      <input
                        class="font-sm color-text-paragraph-2"
                        name="phone"
                        placeholder="Phone number"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="textarea-style mb-30">
                      <textarea class="font-sm color-text-paragraph-2" name="message" placeholder="Tell us about yourself"></textarea>
                    </div>
                    <button class="submit btn btn-send-message" type="submit">Send message</button>
                  </div>
                </div>
              </form>
              <p class="form-messege"></p>
            </div>
            <div class="col-lg-4 text-center d-none d-lg-block">
              <img src={logo} alt="joxBox" />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Contact;
