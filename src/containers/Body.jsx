import React, { Component } from 'react';
import Edit from './EditContact'
import '../App.scss';

class Body extends Component {
  render() {
    return (
      <body>
        <div className="row">
          <div className="col-md-3">
            <div className="side-nav">
              <i className="fa fa-user icon-side"></i>
              <h5 className="side=link">Contacts</h5>
            </div>
            <hr/>
            <div className="side-nav">
              <i className="fa fa-cog icon-side"></i>
              <h5 className="side=link">Settings</h5>
            </div>
            <div className="side-nav">
              <i className="fa fa-question-circle icon-side"></i>
              <h5 className="side=link">Help</h5>
            </div>
          </div>
          <div className="col-md-9">
            <div>
              <h5 className="side-nav">Stared Contacts (50)</h5>
              <table>
                <tbody>
                  <tr>
                    <td><i className="fas fa-star"></i></td>
                    <td><img className="td-img" src="https://robohash.org/mic.png?bgset=bg2" alt=""/></td>
                    <td><h5>Agboola Michael</h5></td>
                    <td><h5>drexlar37@gmail.com</h5></td>
                    <td>+2348135434096</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h5>Contacts (345)</h5>
              <table>
                <tbody>
                <tr>
                    <td><i className="fas fa-star"></i></td>
                    <td><img className="td-img" src="https://robohash.org/micg.png?bgset=bg2" alt=""/></td>
                    <td><h5>Agboola Michael</h5></td>
                    <td><h5>drexlar37@gmail.com</h5></td>
                    <td>+2348135434096</td>
                    <td >
                      <div className="row">
                        <i className="far fa-star i-space mt-1"></i>
                        <Edit className="" />
                        <i className="fas fa-ellipsis-v i-space mt-1"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-star"></i></td>
                    <td><img className="td-img" src="https://robohash.org/mich.png?bgset=bg2" alt=""/></td>
                    <td><h5>Agboola Michael</h5></td>
                    <td><h5></h5></td>
                    <td>+2348135434096</td>
                    {/* <td><i className="far fa-star i-space"></i><i className="fas fa-pencil-alt i-space"></i><i className="fas fa-ellipsis-v i-space"></i></td> */}
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Body;