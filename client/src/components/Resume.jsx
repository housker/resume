import React from 'react';
import ReactDOM from 'react-dom';
import resume from '../assets/Housker2016.pdf';

function Resume(props) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <object className="embed-responsive-item" data={resume} type="application/pdf" internalinstanceid="9" title="">
        <p>Your browser isn't supporting embedded pdf files. You can download the file</p>
      </object>
    </div>
  );
}

export default Resume;