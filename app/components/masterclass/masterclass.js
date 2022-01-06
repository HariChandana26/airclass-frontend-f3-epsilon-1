import './masterclass.css';
import React from 'react';
import { BsPlayCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

function Course(props) {
  const { coursedetails, isenroll } = props;
  return (
    <div className="course-container">
      <div className="masterclass-image">
        <img
          alt="course"
          className="course-image"
          src="https://res.cloudinary.com/due4dmz2b/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fibhubs-media-files.s3-ap-southeast-1.amazonaws.com%2Fkossip%2F10xiitian%2Fprograms%2Fmaster-class%2Frakesh-misra%2FProgram.png"
        />
        <BsPlayCircleFill className="play-icon" />
      </div>

      <div className="course-details">
        <h1 className="course-title">{coursedetails['course-title']}</h1>
        <p className="course-info">{coursedetails['course-info']}</p>

        {isenroll && (
          <button type="button" className="enroll">
            enroll
          </button>
        )}
      </div>
    </div>
  );
}
Course.propTypes = {
  coursedetails: PropTypes.array.isRequired,
  isenroll: PropTypes.bool.isRequired,
};

export default Course;
