import React, { useEffect, useState } from "react";

const Profile = () => {
    const [user, setuser] = useState(false);

  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      setuser(user);
    }, []);
    console.log(user);
  return (
    <div className="pt-50">
      <div class="padding">
        <div class="row  d-flex justify-content-center">
          <div class="col-xl-10 col-md-12">
            <div class="card user-card-full">
              <div class="row m-l-0 m-r-0 ">
                <div class="col-sm-4 bg-c-lite-green user-profile d-flex justify-content-center align-items-center">
                  <div class="card-block text-center text-white">
                    <div class="m-b-25">
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        class="img-radius"
                        alt="User-Profile-Image"
                      />
                    </div>
                    <h6 class="f-w-600">{user?.username}</h6>
                    <p>{user?.role === "user" ? "Student" : user?.role}</p>
                    <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div class="col-sm-8 py-5">
                  <div class="card-block">
                    <h3 class="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h3>
                    <div class="row">
                      <div class="col-sm-6 my-2">
                        <p class="m-b-10 f-w-600">User Name</p>
                        <h6 class="text-muted f-w-400">{user?.username}</h6>
                      </div>
                      <div class="col-sm-6 my-2">
                        <p class="m-b-10 f-w-600">Email</p>
                        <h6 class="text-muted f-w-400">{user?.email}</h6>
                      </div>
                      <div class="col-sm-6 my-2">
                        <p class="m-b-10 f-w-600">Location</p>
                        <h6 class="text-muted f-w-400">{user?.location}</h6>
                      </div>
                      <div class="col-sm-6 my-2">
                        <p class="m-b-10 f-w-600">Phone Number</p>
                        <h6 class="text-muted f-w-400">{user?.phone}</h6>
                      </div>
                      <div class="col-sm-6 my-2">
                        <p class="m-b-10 f-w-600">Consistent</p>
                        <h6 class="text-muted f-w-400">{user?.consistent ? "Yes" : "NO"}</h6>
                      </div>
                      <div class="col-sm-6 my-2">
                        <p class="m-b-10 f-w-600">Education</p>
                        <h6 class="text-muted f-w-400">{user?.education}</h6>
                      </div>

                      
                    </div>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
