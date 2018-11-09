import React, { Component } from 'react';
import user from '../user.png'
import '../App.scss';
import Countries from '../components/SelectCountry';

class Edit extends Component {
  render() {
    return (
      <div>
        <i  className="fas fa-pencil-alt i-space" data-toggle="modal" data-target=".bd-example-modal-lg"></i>

        <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Edit Contact</h5>                
              </div>
              <div className="modal-body">
                <form>
                  <div className="row mb-2 ml-1 mr-2">
                    <img src={user} className="modal-image mr-4 " alt="user"/>
                    <div className="form-group col-5">
                      <input id="inputFName1" type="text" className="form-control form-width-half"  placeholder="First Name"/>
                      <label for="inputFName1">First Name</label>
                    </div>
                    <div className="form-group col-5">
                      <input id="inputLName1" type="text" className="form-control form-width-half" placeholder="Last Name"/>
                      <label for="inputLName1">Last Name</label>
                    </div>
                  </div>
                  <div className="row mb-2 ml-4">
                    <i class="fas fa-building mr-5 mt-1"></i>
                    <div className="form-group col-5">
                      <input id="inputCompany1" type="text" className="form-control form-width-half" placeholder="Company" />
                      <label for="inputCompany1">Company</label>
                    </div>
                    <div className="form-group col-5">
                      <input id="inputJob1" type="text" className="form-control form-width-half" placeholder="Job Title"/>
                      <label for="inputJob1">Job Title</label>
                    </div>
                  </div>
                  <div className="row ml-4">
                    <i class="fas fa-envelope mr-5"></i>
                    <div className="form-group col-5">                      
                      <input id="inputEmail1" type="email" className="form-control form-width" placeholder="Email"/>
                      <label for="inputEmail1">Email</label>
                    </div>
                    <div className="form-group col-5">
                      <input id="inputLabel" type="text" className="form-control form-width-half" placeholder="Label"/>
                      <label for="inputLabel">Label</label>
                    </div>
                  </div>
                  <div className="row ml-4 ">
                    <i class="fas fa-phone mr-5"></i>
                    <div className="col-1">
                      <Countries />
                    </div>
                    <div className="form-group col-4">                      
                      <input id="inputPhone1" type="text" className="form-control form-width" placeholder="Phone"/>
                      <label for="inputPhone1">Phone</label>
                    </div>
                    <div className="form-group col-5">
                      <input id="inputMobile" type="text" className="form-control form-width-half" placeholder="Mobile"/>
                      <label for="inputMobile">Mobile</label>
                    </div>
                  </div>
                  <div className="row ml-4">
                    <i class="fas fa-poll-h mr-5"></i>
                    <div className="form-group col-10">
                      <input id="inputNotes1" type="text" className="form-control form-width" placeholder="Notes"/>
                      <label for="inputNotes1">Notes</label>
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

export default Edit;