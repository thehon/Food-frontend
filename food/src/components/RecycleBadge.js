import React from 'react';
import { ReactComponent as RecycleIcon } from '../images/recycling.svg';
import {
    PieChart, Pie, Sector, Cell,
  } from 'recharts';
const RecycleBadge = (number) => {
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