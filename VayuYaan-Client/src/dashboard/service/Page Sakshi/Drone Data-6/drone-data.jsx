import React from 'react'
import './data.css'
import drone1 from '../../../assets/images/images.jfif'
import drone2 from '../../../assets/images/download (2).jfif'
import Header from '../../header'
import SideBar from '../../sideBar'
import farm1 from '../../../assets/images/download (1).jfif'
import farm2 from '../../../assets/images/download.jfif'
import farm3 from '../../../assets/images/images (1).jfif';
import weather from '../../../assets/images/download (3).jfif';
import field from '../../../assets/images/images (2).jfif';
function Dronedata() {
  return (
    <div id='container-Body6'>
      <Header/>
      <SideBar/>
      <div className='Drone-dat'>
        {/* part 1 */}
        <div className='head_dta'><h1>Drone Data</h1></div>
        {/* part 2 */}
        <div className='data_list'>
          <div className='d1'><p className='dta-para'>Data Collection</p></div>
          <div className='d2'><p className='dta-para'>Data Processsing</p></div>
          <div className='d3'><p className='dta-para'>Data Analysis</p></div>
        </div>
        {/* part 4 */}
        <div id='drone_img section'>
          <div className='img_box1'>
            <div className='para-clss'>
              <p className='p1'>Drone ID #</p>
              <p className='p2'>1</p>
              <p className='p3'>DJI Mini SE</p>
            </div>
            <div className='img_class'><img src={drone1} alt="d1" /></div>
          </div>
          <div className='img_box2'>
          <div className='para-clss'>
              <p className='p1'>Drone ID #</p>
              <p className='p2'>4</p>
              <p className='p3'>DJI Phantom</p>
            </div>
            <div className='img_class'><img src={drone2} alt="d1" /></div>
          </div>
        </div>
        {/* part 5 */}
          <div className='data-service-head'><h1>Drone ID # 1</h1></div>
          <div className='service-detailPara'>
            <p><span>Service Details</span><br></br>
             ID# 1144 <br></br>Status: Finished Service <br></br>Type: Rental - Data Collection <br></br>Time Start: 06/29/2022, 10:00 am <br></br>Time End: 06/29/2022, 5:00 pm <br></br>Land: West Plot A - Crop <br></br>Drone ID #1: DJI Mini SE</p>
          </div>
          {/* part 6 */}
          <div className='droneData_collection head'><h1>Data Collection</h1><p className='para'>Images  <button>View More</button></p></div>
          <div className='collection-img'>
            <div className='img-detail' id='Id1'>
              <img src={farm1} alt="f1" />
              <p className='img-time'>Image at 10:00 AM</p>
              <p className='location'>Location:  (37.558381,-122.048111)</p>
            </div>
            <div className='img-detail' id='Id2'>
              <img src={farm2} alt="f2" />
              <p className='img-time'>Image at 10:15 AM</p>
              <p className='location'>Location: (37.558400,-122.048111)</p>
            </div>
            <div className='img-detail' id='Id3'>
              <img src={farm3} alt="f3" />
              <p className='img-time'>Image at 10:30 AM</p>
              <p className='location'>Location: (37.558400,-122.048111)</p>
            </div>
            
          </div>
          {/* part-7 */}
          <p className='video'>Videos <button>View More</button></p>
          <div className='collection-vedio'>
            <div className='vedio-detail'>
              <img src={farm3} alt="fr3" />
              <p className='vedio-time'>Video from 10:00 AM </p>
              <p className='location'>Location:  (37.558400,-122.048111)<br></br>Duration: 15 seconds</p>
            </div>
            <div className='vedio-detail'>
              <img src={farm2} alt="fr2" />
              <p className='vedio-time'>Video from 10:30 AM </p>
              <p className='location'>Location:  (37.558400,-122.048111)<br></br>Duration: 15 seconds</p>
            </div>
            <div className='vedio-detail'>
              <img src={farm1} alt="fr1" />
              <p className='vedio-time'>Video from 10:30 AM </p>
              <p className='location'>Location:  (37.558400,-122.048111)<br></br>Duration: 15 seconds</p>
            </div>
          </div>
          {/* part-8 */}
          <p className='lidhar'>LiDHAR <button>View More</button></p>
          <div className='weather-detail'>
            <img src={weather} alt="w1" />
            <p className='point'>Point Cloud at 10:00 AM</p>
            <p className='location'>Location:  (37.558381,-122.048111)</p>
          </div>

          {/* part-9 */}
          <p className='infrared'>Combined Near Infrared Images of Crop Field </p>
          <div className='infrared-detail'>
            <img src={field} alt="i1" />
            <p className='field'>Image at 10:00 AM</p>
            <p className='location'>Location:  (37.558381,-122.048111)</p>
          </div>
      </div>
    </div>
  )
}

export default Dronedata