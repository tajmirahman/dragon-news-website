import React from 'react';
import SocialComponent from '../SocialComponent';
import FindUsComponent from '../FindUsComponent';

const RightNav = () => {
    return (
        <div className='space-y-5'>
            <SocialComponent />
            <FindUsComponent />
        </div>
    );
};

export default RightNav;