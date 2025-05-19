import React from 'react';
import { SyncLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>

            <SyncLoader color="#d75a00" />

        </div>
    );
};

export default Loading;