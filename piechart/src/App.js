import './App.css';
import React, { useState, useCallback, useEffect } from 'react';
import { csv, arc, pie } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/droidjahangir/88ea870715b79bfbd18dbb8d74562779/raw/34e8ecac35a8424ae91590cb1effff0f8a895b25/cssNamedColor.csv';

const width = 960;
const height = 500;

const centerX = width / 2;
const centerY = height / 2;

// All these pie/arc related method definition we can find d3-shape link below
// https://github.com/d3/d3-shape

// const pieArc = arc().innerRadius(0).outerRadius(width); // fill all the width
const pieArc = arc().innerRadius(0).outerRadius(230);

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <pre>Loading....</pre>;
  }
  console.log(data[0]);

  const colorPie = pie().value(1);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {colorPie(data).map((d, i) => (
          <path fill={d.data['RGB hex value']} d={pieArc(d)} />
        ))}
      </g>
    </svg>
  );
}

export default App;

// d={pieArc({
//   startAngle: (i / data.length) * 2 * Math.PI,
//   endAngle: ((i + 1) / data.length) * 2 * Math.PI,
// })}
