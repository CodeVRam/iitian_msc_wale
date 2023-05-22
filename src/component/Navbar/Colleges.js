import React from 'react'
import CollegeItem from './CollegeItem';

const Colleges = () => {
  return (
    <div className="container py-5">
      <div className="row pb-5 mb-4">
        <div className="col-lg-3 col-md-6 mb-5">
          <CollegeItem name='IIT Guwahati' courses={['Maths','Physics','Chemistry']} />
        </div>
      </div>
    </div>
  )
}

export default Colleges
