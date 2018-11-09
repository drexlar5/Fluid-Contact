import React, { Component } from 'react';
import user from '../user1.png'
import '../App.scss';
import '../float.css'
import Countries from './../components/SelectCountry';

class Add extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-danger fab" data-toggle="modal" data-target="#exampleModalCenter">
        <span>+</span>
        </button>

        <div className="modal fade bd-example-modal-lg" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Create Contact</h5>                
              </div>
              <div className="modal-body">
                <form>
                  <div className="row mb-2 ml-1 mr-2">
                    <img src={user} className="modal-image mr-4 " alt="user"/>
                    <div className="form-group col-5">
                      <input id="inputFName" type="text" className="form-control form-width-half"  placeholder="First Name"/>
                      <label for="inputFName">First Name</label>
                    </div>
                    <div className="form-group col-5">
                      <input id="inputLName" type="text" className="form-control form-width-half" placeholder="Last Name"/>
                      <label for="inputLName">Last Name</label>
                    </div>
                  </div>
                  <div className="row mb-2 ml-4">
                    <i class="fas fa-building mr-5 mt-1"></i>
                    <div className="form-group col-5">
                      <input id="inputCompany" type="text" className="form-control form-width-half" placeholder="Company" />
                      <label for="inputCompany">Company</label>
                    </div>
                    <div className="form-group col-5">
                      <input id="inputJob" type="text" className="form-control form-width-half" placeholder="Job Title"/>
                      <label for="inputJob">Job Title</label>
                    </div>
                  </div>
                  <div className="row ml-4">
                    <i class="fas fa-envelope mr-5"></i>
                    <div className="form-group col-10">                      
                      <input id="inputEmail" type="email" className="form-control form-width" placeholder="Email"/>
                      <label for="inputEmail">Email</label>
                    </div>
                  </div>
                  <div className="row ml-4">
                    <i class="fas fa-phone mr-5"></i>
                    <div className="col-1">
                      <Countries />
                    </div>
                    <div className="form-group col-9">                      
                      <input id="inputPhone" type="text" className="form-control form-width" placeholder="Phone"/>
                      <label for="inputPhone">Phone</label>
                    </div>
                  </div>
                  <div className="row ml-4">
                    <i class="fas fa-poll-h mr-5"></i>
                    <div className="form-group col-10">
                      <input id="inputNotes" type="text" className="form-control form-width" placeholder="Notes"/>
                      <label for="inputNotes">Notes</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    );
  }
}

export default Add;