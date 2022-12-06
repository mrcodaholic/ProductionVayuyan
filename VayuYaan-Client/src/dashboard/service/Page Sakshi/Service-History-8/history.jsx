import React from 'react'
import Header from '../../header'
import SideBar from '../../sideBar'
import SearchIcon from "../../../assets/images/searchIcon.svg";

import './style.css';


function Servicehistory() {
  return (
    <div className='service-container'>
        <Header/>
        <SideBar/>
        <div className='serviceBody'>
          <div><h1 className='ser-head'>Service History</h1></div>
          <div className='ser-box'><div className='sub-box'><p>Service History</p></div></div>
          <div className='service-table-section'>
            <div className='table-nav'>
              <div className='nav-1'><h2>All Services</h2></div>
              <div className='nav-2'><img src={SearchIcon} alt="s1" /><input type="text" placeholder='Search..' /></div>
              <div className='nav-3'>
                  <label for="cars">Short by :</label>
                  <select name="cars" id="cars">
                    <option value="volvo">Newest</option>
                    <option value="saab">Oldest</option>
                  </select>
              </div>
            </div>
            <table className="service_table" >
                <tr>
                  <th style={{width:"20%"}} >Service ID#</th>
                  <th style={{width:"20%"}}>Farmland</th>
                  <th style={{width:"20%"}}>Land Type</th>
                  <th style={{width:"20%"}}>Service</th>
                  <th style={{width:"20%"}}>Service Time</th>
                  <th style={{width:"20%"}}>Status</th>
                </tr>
                <span>_</span>
                <tr className='table-tr'>
                  <td>ID# 1144</td>
                  <td>West Plot A</td>
                  <td>Crop</td>
                  <td>Rental: Data Collection</td>
                  <td>06/29/2022</td>
                  <td><div className='f-Btn'><p className='b-Btn'></p></div></td>
                </tr>
                <span>_</span>
                <tr className='table-tr'>
                  <td>ID# 1000</td>
                  <td>West Plot A</td>
                  <td>Crop</td>
                  <td>Rental: Data Collection</td>
                  <td>04/20/2022</td>
                  <td><div className='f-Btn'><p className='b-Btn'></p></div></td>
                </tr>
              </table>
           
          </div>
        </div>
    </div>
  )
}

export default Servicehistory