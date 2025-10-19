import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 200, height = 60, className = '' }) => {
  return (
    <div className={className} style={{ width, height }}>
      <img 
        src="/logo.svg" 
        alt="Honey Date Logo" 
        width={width} 
        height={height}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Logo;