import React, { useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Heading from '../Heading/Heading';
import Teacher from './Teacher';

export default function InstructorMain() {
	const [apiData, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("token"));
		fetch("https://inspiretostudy.up.railway.app/api/v1/user/allconsultant", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setLoading(false);
				setData(data?.response_data?.users);
				console.log(data);
			})
			.catch((err) => toast.error(err.meassge));
	}, []);

	return (
		<main className='mt-5 pt-100'>
			<Heading heading={"Out Coaches"} subHeading={"You don't have to struggle alone, you've got our assistance and help."} />
			{loading ? (
				<div
					style={{
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div class="spinner-border" role="status">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			) : (

				<div className="container">
					<div className="row d-flex flex-row ">
						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
							{apiData?.map((item, key) => (
								<>
									<div className="col-lg-4 col-md-6 col-12 pt-30">
										<Teacher key={key} teacherName={item.username} position={item.role} />
									</div>
								</>
							))}
						</div>
					</div>
				</div>
			)}
			{/* Teacher-end */}

			{/* cta-start */}
			{/* <Banner /> */}
			{/* cta-end */}

			{/* cta-start */}
			{/* <Cta /> */}
			{/* cta-end */}
		</main>
	)
}
