import { reduceClasses } from '../../Library/Utils';
import React from 'react';

const Container = React.forwardRef(({ children, className, ...props }, ref) => (
    <div
      className={reduceClasses('mx-auto w-11/12 max-w-7xl 2xl:w-4/5', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

export default Container;