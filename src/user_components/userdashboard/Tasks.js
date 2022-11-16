import React from "react";
import Taskschild from "./Taskschild";

function Tasks() {
  return (
    <div class="tab-content">
      <h3 class="mt-0 mb-15 color-brand-1">Tasks</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Company Name</th>
            <th scope="col">Applied Date</th>
            <th scope="col">Task Deadline</th>
            <th scope="col">Tasks</th>
          </tr>
        </thead>
        <tbody>
          <Taskschild/>
          <Taskschild/>
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
