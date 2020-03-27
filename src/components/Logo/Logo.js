import React from 'react';
import Tilt from 'react-tilt';
import reck from './reck.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4'>
            <div 
            className='ma4 mt0'
            style={{display: 'flex', 
            justifyContent:'center'}}>
                <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner pa3">
                        <img style={{paddingTop: '5px'}} alt='logo' src={reck}/>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}
export default Logo;
// credit to logo
/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */