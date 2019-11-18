import React from 'react'
import {div} from '@tensorflow/tfjs'

const Landing = () => {
  return (
    <div>
      <div className="card mb-3" id="card3" style={{width: 100 + '%'}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="https://www.ncbi.nlm.nih.gov/books/NBK537152/bin/Gray889.jpg"
              className="card-img"
              alt="anatomical depiction of an eye"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">See the real you</h5>
              <p className="card-text">
                ARnatomy is an Augmented Reality (AR) tool to visualize the you
                underneath.
              </p>
              <h5 className="card-title">Pick your view</h5>
              <p className="card-text">
                Head to the Camera tab and select from several anatomical views.
              </p>
              <button type="button" className="btn btn-outline-dark">
                <a href="/camera">Start Looking</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
