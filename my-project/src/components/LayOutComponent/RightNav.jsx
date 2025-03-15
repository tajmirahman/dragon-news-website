import React from 'react';
import SocialComponent from '../SocialComponent';
import FindUsComponent from '../FindUsComponent';
import QzoneComponent from '../QzoneComponent';

const RightNav = () => {
    return (
        <div className='space-y-5'>
            <SocialComponent />
            <FindUsComponent />
            <QzoneComponent />
        </div>
    );
};

export default RightNav;