import React from 'react';

type DividerProps = {
  size?: number;
  color?: string;
}

const Divider: React.FunctionComponent<DividerProps> = ({ size = 1, color = '#C0C0C0' }) => {
  return (
    <div style={{ borderBottom: `${size}px solid ${color}` }}></div>
  );
}

export default Divider;