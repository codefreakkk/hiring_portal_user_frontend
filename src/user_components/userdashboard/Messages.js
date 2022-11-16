import React from 'react'
import Messagechild from "./Messagechild";

function Messages() {
  return (
    <div class="tab-content">
        <h3 class="mt-0 mb-15 color-brand-1">Messages</h3>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Company Name</th>
            <th scope="col">Date</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          <Messagechild/>
          <Messagechild/>
          <Messagechild/>
          <Messagechild/>
        </tbody>
      </table>
    </div>
  )
}

export default Messages