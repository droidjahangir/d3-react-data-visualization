import { arc } from 'd3';

// https://github.com/d3/d3-shape
// console.log(arc)
// this code is from d3-shape packages in arc() constractor and then method chaining. .
export const Mouth = ({mouthRadius, mouthWidth}) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2);
  
  return <path d={mouthArc()}/>;
};