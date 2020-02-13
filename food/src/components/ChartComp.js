import React from 'react';
import {
    PieChart, Pie, Sector, Cell,
  } from 'recharts';

const ChartComp = ({ yourValue, theirValue, fill1, fill2}) => {    
    const data = [
        { name: 'Community', value: yourValue, fill1: fill1, fill2: fill2 },
        { name: 'You', value: theirValue, fill1: fill1, fill2: fill2 },
        
      ];
      const renderActiveShape = (props) => {
        console.log('props: ', props);
        const RADIAN = Math.PI / 180;
        const {
          cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
          fill1,fill2, payload, percent, value,
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
      
        return (
          <g style={{position: 'relative'}}>
            
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={payload.payload.fill2}
              className="first"
              
            />
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + -1}
              outerRadius={outerRadius + 10}
              fill={payload.payload.fill2}
              className="second"
            />
          
          </g>
        );
      };
        return (
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={0}
              activeShape={renderActiveShape}
              data={data}
              cx={200}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill={fill1}
              dataKey="value"
              label={false}
              startAngle={0}            
            />
          </PieChart>
        );
}

export default ChartComp;