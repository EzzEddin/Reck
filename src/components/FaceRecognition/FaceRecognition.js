import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
    const boundingBoxes = boxes.map((box, i) => {
        return (
            <div 
                className='bounding-box'
                key={i}
                style={{
                    top: box.top,
                    right: box.right,
                    bottom: box.bottom,
                    left: box.left
                    }}
            ></div>
        );
});
return (
    <div className='flex justify-center ma3'>
      <div className='relative'>
        <img
          id='inputimage'
          className='db'
          src={imageUrl}
          alt=''
          width='700px'
          heigh='auto'
        />
        {boundingBoxes}
      </div>
    </div>
  );
}
export default FaceRecognition; 