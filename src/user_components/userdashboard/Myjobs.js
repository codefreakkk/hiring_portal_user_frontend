import React from "react";
import Myjobschild from "./Myjobschild"

function Myjobs() {
  return (
    <div class="tab-content">
      <h3 class="mt-0 mb-15 color-brand-1">My Jobs</h3>
      <a class="font-md color-text-paragraph-2" href="#">
        <input type="text" placeholder="Search my jobs" />
      </a>

      {/*  */}
      <Myjobschild/>
    </div>
  );
}

export default Myjobs;
