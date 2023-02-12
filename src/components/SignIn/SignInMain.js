import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function SignInMain() {
  const [formData, updateFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleChangeFormData = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const apiData = {
      ...formData,
    };
    console.log(apiData);

    if (!loading) {
      fetch("https://inspiretostudy.up.railway.app/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...apiData,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          if (data.response_code === 200 || data.response_code === 201) {
            localStorage.setItem(
              "user",
              JSON.stringify({ ...data.response_data.user })
            );
            if (data.response_data.user.role === "user") {
              router.push("/student_pannel");
            } else if (data.response_data.user.role === "consultant") {
              router.push("/Coach_Pannel");
            }

            toast.success("Login Successfully");
          } else {
            toast.error(data.response_message);
          }
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.message);
        });
    }
  };
  return (
    <main>
      <section className="signup__area po-rel-z1 pt-100 pb-145">
        <div className="sign__shape">
          <img
            className="man-1"
            src="assets/img/icon/sign/man-1.png"
            alt="img not found"
          />
          <img
            className="man-2"
            src="assets/img/icon/sign/man-2.png"
            alt="img not found"
          />
          <img
            className="circle"
            src="assets/img/icon/sign/circle.png"
            alt="img not found"
          />
          <img
            className="zigzag"
            src="assets/img/icon/sign/zigzag.png"
            alt="img not found"
          />
          <img
            className="dot"
            src="assets/img/icon/sign/dot.png"
            alt="img not found"
          />
          <img
            className="bg"
            src="assets/img/icon/sign/sign-up.png"
            alt="img not found"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
              <div className="section__title-wrapper text-center mb-55">
                <h2 className="section__title">
                  Sign in to <br /> recharge direct.
                </h2>
                <p>
                  it you don't have an account you can{" "}
                  <Link href="/sign-up">
                    <a>Register here!</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="sign__wrapper white-bg">
                <div className="sign__header mb-35"></div>
                <div className="sign__form">
                  <form action="#">
                    <div className="sign__input-wrapper mb-25">
                      <h5>Email</h5>
                      <div className="sign__input">
                        <input
                          type="text"
                          placeholder="e-mail address"
                          value={formData?.email}
                          name="email"
                          onChange={handleChangeFormData}
                        />
                        <i className="fas fa-envelope"></i>
                      </div>
                    </div>
                    <div className="sign__input-wrapper mb-10">
                      <h5>Password</h5>
                      <div className="sign__input">
                        <input
                          type="text"
                          placeholder="Password"
                          value={formData.password}
                          name="password"
                          onChange={handleChangeFormData}
                        />
                        <i className="fas fa-lock"></i>
                      </div>
                    </div>
                    <div className="sign__action d-sm-flex justify-content-between mb-30">
                      {/* <div className="sign__agree d-flex align-items-center">
                        <input
                          className="m-check-input"
                          type="checkbox"
                          id="m-agree"
                        />
                        <label className="m-check-label" htmlFor="m-agree">
                          Keep me signed in
                        </label>
                      </div> */}
                      {/* <div className="sign__forgot">
                        <a href="#">Forgot your password?</a>
                      </div> */}
                    </div>

                    <button className="e-btn  w-100" onClick={handleSubmit}>
                      {loading ? (
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      ) : (
                        <span>Sign In</span>
                      )}
                    </button>

                    <div className="sign__new text-center mt-20">
                      <p>
                        New to Markit?{" "}
                        <Link href="/sign-up">
                          <a>Sign Up</a>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default SignInMain;
