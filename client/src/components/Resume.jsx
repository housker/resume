import React from 'react';
import ReactDOM from 'react-dom';
import resume from '../assets/Housker2016.pdf';

function Resume(props) {
  return (
    <div>
<embed src={resume} width="800px" height="2100px" />
    </div>
  );
}

export default Resume;