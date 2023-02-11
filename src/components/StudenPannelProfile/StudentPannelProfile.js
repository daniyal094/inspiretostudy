import React from "react";

export default function StudentPannelProfile() {
  return (
    <>
      <div>
        <div className="container rounded bg-white mt-5 mb-5 ">
          <form>
            <div className="row">
              <h2>Profile Details</h2>
              <div className="col-md-9 border-right containerWithShadow">
                <div className="p-3 py-5">
                  <div className="row mt-2">
                    <div className="col-6">
                      <div className="patient-dashboard-text-field-container">
                        <div className="patient-dashboard-text-field-label">
                          <span style={{fontWeight:'800', color:'black'}}>Name</span>
                        </div>
                      </div>
                      <div className="patient-dashboard-text-field-value">
                        <span className="mb-2">Testing patient</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="patient-dashboard-text-field-container">
                        <div className="patient-dashboard-text-field-label">
                          <span style={{fontWeight:'800', color:'black'}}s>Email</span>
                        </div>
                      </div>
                      <div className="patient-dashboard-text-field-value">
                        <span className="mb-2">patient@rippleuae.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <div className="patient-dashboard-text-field-container">
                        <div className="patient-dashboard-text-field-label">
                          <span style={{fontWeight:'800', color:'black'}}>Contact Number</span>
                        </div>
                      </div>
                      <div className="patient-dashboard-text-field-value">
                        <span className="mb-2">+923004567890</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="patient-dashboard-text-field-container">
                        <div className="patient-dashboard-text-field-label">
                          <span style={{fontWeight:'800', color:'black'}}>Street</span>
                        </div>
                      </div>
                      <div className="patient-dashboard-text-field-value">
                        <span className="mb-2">gulshen</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-6">
                      <div className="patient-dashboard-text-field-container">
                        <div className="patient-dashboard-text-field-label">
                          <span style={{fontWeight:'800', color:'black'}}>City</span>
                        </div>
                      </div>
                      <div className="patient-dashboard-text-field-value">
                        <span className="mb-2">Karachi</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="patient-dashboard-text-field-container">
                        <div className="patient-dashboard-text-field-label">
                          <span style={{fontWeight:'800', color:'black'}}>Country</span>
                        </div>
                      </div>
                      <div className="patient-dashboard-text-field-value">
                        <span className="mb-2">Afghanistan</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div className="patient-dashboard-text-field-container">
                        <div className="patient-dashboard-text-field-label">
                          <span style={{fontWeight:'800', color:'black'}}>Alternate Phone Number</span>
                        </div>
                      </div>
                      <div className="patient-dashboard-text-field-value">
                        <span className="mb-2">923171017980</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="patient-dashboard-text-field-label">
                        <span style={{fontWeight:'800', color:'black'}}>Nationality</span>
                      </div>
                      <div className="patient-dashboard-text-field-value">
                        <span className="mb-2">Malaysia</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div className="patient-dashboard-text-field-container">
                        <div className="patient-dashboard-text-field-label">
                          <span style={{fontWeight:'800', color:'black'}}>Gender</span>
                        </div>
                      </div>
                      <div className="patient-dashboard-text-field-value">
                        <span className="mb-2">Male</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="patient-dashboard-text-field-container">
                        <div className="patient-dashboard-text-field-label">
                          <span style={{fontWeight:'800', color:'black'}}>NIC/Passport</span>
                        </div>
                      </div>
                      <div className="patient-dashboard-text-field-value">
                        <span className="mb-2">12345678978990-2</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div className="patient-dashboard-text-field-container">
                        <div className="patient-dashboard-text-field-label">
                          <span style={{fontWeight:'800', color:'black'}}>Date Of Birth</span>
                        </div>
                      </div>
                      <div className="patient-dashboard-text-field-value">
                        <span className="mb-2">1998-05-07</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1 ml-2 text-center">
                  <div className="row my-2">
                    <div className="col-lg-2 col-md-4 col-sm-12 px-0 mx-2">
                      <div className="e-btn-std">
                        <a>Edit Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
