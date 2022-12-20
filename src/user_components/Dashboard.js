import React, { useEffect, useState } from "react";
import Header from "./Header";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Myprofile from "./userdashboard/Myprofile";
import Myjobs from "./userdashboard/Myjobs";
import Tasks from "./userdashboard/Tasks";
import Viewtask from "./userdashboard/Viewtask";
import Messages from "./userdashboard/Messages";
import Viewmessage from "./userdashboard/Viewmessage";
import CheckLoggedIn from "./CheckLoggedIn";

function Dashboard() {
  
  return (
    <>
      <CheckLoggedIn />
      <Header />
      <main class="main">
        <section class="section-box mt-50">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-12">
                <div class="box-nav-tabs nav-tavs-profile mb-5">
                  <NavLink to="">
                    <div>
                      <a
                        style={{ width: "290px", fontSize: "12px" }}
                        class="btn btn-border aboutus-icon mb-20"
                      >
                        My Profile
                      </a>
                    </div>
                  </NavLink>

                  <NavLink to="myjobs">
                    <div>
                      <span
                        style={{ width: "290px", fontSize: "12px" }}
                        class="btn btn-border recruitment-icon mb-20"
                      >
                        My Jobs
                      </span>
                    </div>
                  </NavLink>

                  <NavLink to="tasks" activeClassName="active">
                    <div>
                      <span
                        style={{ width: "290px", fontSize: "12px" }}
                        class="btn btn-border people-icon mb-20"
                      >
                        Tasks
                      </span>
                    </div>
                  </NavLink>

                  <NavLink to="messages">
                    <div>
                      <span
                        style={{ width: "290px", fontSize: "12px" }}
                        class="btn btn-border recruitment-icon mb-20"
                      >
                        Messages
                      </span>
                    </div>
                  </NavLink>
                </div>
              </div>

              <div class="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
                <div class="content-single">
                  <Routes>
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/myjobs" element={<Myjobs />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/tasks/view" element={<Viewtask />} />
                    <Route path="/messages/view" element={<Viewmessage />} />
                    <Route path="/" element={<Myprofile />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
