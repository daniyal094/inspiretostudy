import { InputLabel, MenuItem, } from '@mui/material'
import Link from 'next/link'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useEffect, useState } from 'react'

export default function SignUpMain() {
    const [formData, updateFormData] = useState({});

    const handleChangeFormData = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        localStorage.setItem('items', JSON.stringify({ ...formData }));

        fetch('http://192.168.222.221:8000/api/v1/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                ...formData
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

    };

    console.log(formData);

    const [education, setEducation] = useState('')
    const handleChange = (event) => {
        setEducation(event.target.value);
    };
    const [gender, setGender] = useState('')
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <main>
                <section className="signup__area po-rel-z1 pt-100 pb-145">
                    <div className="sign__shape">
                        <img className="man-2 man-22" src="assets/img/icon/sign/man-2.png" alt="img not found" />
                        <img className="circle" src="assets/img/icon/sign/circle.png" alt="img not found" />
                        <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt="img not found" />
                        <img className="dot" src="assets/img/icon/sign/dot.png" alt="img not found" />
                        <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="img not found" />
                        <img className="flower" src="assets/img/icon/sign/flower.png" alt="img not found" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                                <div className="section__title-wrapper text-center mb-55">
                                    <h2 className="section__title">Create a free <br />  Account</h2>
                                    <p>I'm a subhead that goes with a story.</p>
                                </div>
                            </div>
                        </div>
                        <form action='false'>
                            <div className="white-bg ">
                                <div className="row d-flex justify-content-between">
                                    <div className="sign__form col-xxl-6">
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Name</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Full name" onChange={handleChangeFormData} name="username" />
                                                <i className="fas fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Password</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Password" onChange={handleChangeFormData} name='password' />
                                                <i className="fas fa-lock"></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Location</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Location" onChange={handleChangeFormData} name="location" />
                                                <i className="fas fa-location"></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Gender</h5>
                                            <Select
                                                labelId="demo-simple-select-autowidth-label"
                                                id="demo-simple-select-autowidth"
                                                label="Gender"
                                                onChange={handleChangeGender}
                                                autoWidth
                                                value={gender}
                                            >
                                                <MenuItem value={'Blank'}><em>None</em></MenuItem>
                                                <MenuItem value={'male'}>Male</MenuItem>
                                                <MenuItem value={'female'}>Femail</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="sign__form col-xxl-6">
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Email</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Email" onChange={handleChangeFormData} name='email' />
                                                <i className="fas fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Retype Password</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Retype Password" onChange={handleChangeFormData} name='retypepassword' />
                                                <i className="fas fa-lock"></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Phone Number</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Phone Number" onChange={handleChangeFormData} name='phone' />
                                                <i className="fas fa-phone"></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Education</h5>
                                            <Select
                                                labelId="demo-simple-select-autowidth-label"
                                                id="demo-simple-select-autowidth"
                                                label="Education"
                                                onChange={handleChange}
                                                autoWidth
                                                value={education}
                                            >
                                                <MenuItem value={'Blank'}><em>Type of Education</em></MenuItem>
                                                <MenuItem value={'Matric'}>Matric</MenuItem>
                                                <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                                                <MenuItem value={'Bachelor'}>Bachelor</MenuItem>
                                                <MenuItem value={'Master'}>Master</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                </div>
                                <div>
                                    <div className="d-flex mb-20">
                                        <input type="checkbox" id='studyGuide' />
                                        <label className='ml-10' htmlFor="">I understand that this plan contains a generalized study guide that is hourly based and
                                            will be effective only if I follow it.</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex mb-20">
                                        <input type="checkbox" id='attend' />
                                        <label className='ml-10' htmlFor="">I understand that by joining this plan I will get a 50-minute session one-to-one with Ms.
                                            Izzah Khurram (CEO Inspire to Study & Clinical Psychologist) any time within a month of
                                            joining and 3-4 group live sessions which I have to attend.</label>
                                    </div>
                                </div>
                                <div>
                                    <button className="e-btn w-50" type='submit' onClick={handleSubmit}> <span></span> Sign Up</button>
                                    <div className="sign__new mt-20">
                                        <p>Already in Markit ? <Link href="/sign-in"><a>Sign In</a></Link></p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}
