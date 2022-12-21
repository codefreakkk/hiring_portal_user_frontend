import React from 'react'
import { NavLink } from "react-router-dom";

function Taskschild({oname, date, detail}) {
  return (
    <>
        <tr>
            <td>{oname}</td>
            <td>{date}</td>
            <td>{detail}</td>
            {/* <NavLink to="view">
            <td>view</td>
            </NavLink> */}
          </tr>
    </>
  )
}

export default Taskschild