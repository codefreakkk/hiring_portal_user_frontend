import React from "react";
import logo1 from "../user_assets/imgs/template/newsletter-left.png";
import logo2 from "../user_assets/imgs/template/newsletter-right.png"

function Section5() {
  return (
    <>
      <section class="section-box mt-50 mb-20">
        <div class="container">
          <div class="box-newsletter">
            <div class="row">
              <div class="col-xl-3 col-12 text-center d-none d-xl-block">
                <img
                  src={logo1}
                  alt="joxBox"
                />
              </div>
              <div class="col-lg-12 col-xl-6 col-12">
                <h2 class="text-md-newsletter text-center">
                  New Things Will Always
                  <br /> Update Regularly
                </h2>
                <div class="box-form-newsletter mt-40">
                  <form class="form-newsletter">
                    <input
                      class="input-newsletter"
                      type="text"
                      value=""
                      placeholder="Enter your email here"
                    />
                    <button class="btn btn-default font-heading icon-send-letter">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-xl-3 col-12 text-center d-none d-xl-block">
                <img
                  src={logo2}
                  alt="joxBox"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section5;
