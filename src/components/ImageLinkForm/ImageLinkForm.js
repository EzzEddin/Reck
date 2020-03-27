import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <h1 className='f1'>Reck</h1> 
            <p className='f3'>
                {'Reck can detect faces in your picture. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form center pa1 br1 shadow-5'>
                    <input 
                        className='f4 pa1 w-100 center'
                        type='tex'
                        placeholder='Copy and paste the image url'
                        onChange={onInputChange}
                    />
                </div>
            </div>
            <button
                className='w-10 ma2 grow f4 link ph3 pv2 dib white bg-light-purple'
                onClick={onPictureSubmit}
            >Detect</button>
        </div>
    );
}
export default ImageLinkForm;