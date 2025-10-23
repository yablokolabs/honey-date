import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className = '', id }: ContainerProps) {
  return (
    <section 
      id={id}
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 w-full ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
