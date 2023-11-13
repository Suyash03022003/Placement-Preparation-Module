import React from 'react'
import { ReactComponent as Loading } from '../assets/LoadingScreen.svg'

const LoadingScreen = () => {
    return (
        <div
            style={{width: '100%', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        >
            <Loading width="5%" height="auto" />
        </div>
    );
};

export default LoadingScreen;