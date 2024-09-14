import React from 'react'
import img1 from '../Components/img(4).jpg'

export default function Home() {
  return (
    <div className='container'>
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card" style={{"width":"18rem"}} >
            <img src={img1}class="card-img-top" alt="default" />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
