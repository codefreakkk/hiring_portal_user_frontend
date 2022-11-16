import React from 'react'
import { NavLink } from 'react-router-dom'

function Messagechild() {
  return (
    <>
       <tr>
            <td>Infosys</td>
            <td>12-20-22</td>
            <NavLink to="view">
            <td>view</td>
            </NavLink>
          </tr>
    </>
  )
}

export default Messagechild