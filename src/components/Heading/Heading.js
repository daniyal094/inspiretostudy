import React from 'react'

const Heading = ({heading,subHeading}) => {
  return (
    <div className="row">
    <div className="col-xxl-4 offset-xxl-4">
        <div className="section__title-wrapper text-center">
            <h2 className="section__title"><br/>   <span className="yellow-bg yellow-bg-big">{heading}<img src="assets/img/shape/yellow-bg.png" alt="img not found"/></span></h2>
            <p>{subHeading}.</p>
        </div>
    </div>
</div>
  )
}

export default Heading