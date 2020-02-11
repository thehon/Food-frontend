import React from 'react';
import { ReactComponent as RecycleIcon } from '../images/recycling.svg';

const RecycleBadge = (number) => {
    console.log(RecycleBadge);
    return (
        <div class="recycle-badge">
            <RecycleIcon style={{width:"100%"}}/>
            <div class="recycle-number">
                {number.number}
            </div>
        </div>
    );
}

export default RecycleBadge;