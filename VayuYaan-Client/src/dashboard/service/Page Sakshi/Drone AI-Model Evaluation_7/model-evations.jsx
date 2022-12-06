import React from 'react'
import Header from '../../header'
import SideBar from '../../sideBar'
import crop from '../../../assets/images/images (3).jfif';
import bargraph from '../../../assets/images/slope-chart-in-excel-5.jpg';
import box from '../../../assets/images/images.png';
import code from '../../../assets/images/images (4).jfif';
import './module.css'
function ModelEvaluations() {
  return (
    <div id='model-containerBody'>
        <Header/>
        <SideBar/>
        <div className='model-container'>
          <div className='head_dta'><h1>Drone AI Model Evaluations</h1></div>
          <div className='bar_list'>
            <div className='b1'><p className='bar-para'>AI Service Management</p></div>
            <div className='b2'><p className='bar-para'>AI Model Management</p></div>
            <div className='b3'><p className='bar-para'>AI Evaluations</p></div>
          </div>
          <div className='prt-service'>
            <div className='prt-head'>
              <div><p>Service ID #1144</p></div>
              <div><img src={crop} alt="c1" /></div>
            </div>
            <div className='prt-para'>
              <p className='c1'>Crop Health<br></br>Object Detection Model: DenseNet-201</p>
              <p className='c2'>n = 100 images</p>
            </div>
          </div>
          <div id='prt-image'>
            <img src={code} alt="code" className='img1' />
            <div id='graph'>
              <p><img src={box} alt="box"  className='img2'/></p>
              <p><img src={bargraph} alt="bar"  className='img3'/></p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default ModelEvaluations