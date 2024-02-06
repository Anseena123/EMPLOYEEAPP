
import React from 'react'

import './Form.css'
const Form = () => {
  return (
    <div className='img'>
        <div className="conatiner">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">

<form className="fr">
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Designation</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Location</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Salary</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-light">Login</button>
</form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Form

