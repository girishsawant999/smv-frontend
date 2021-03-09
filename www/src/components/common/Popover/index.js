import React from 'react';

const Popover = ({type, ...props}) => {

  if(type === 'large')
    return (
      <div className="popup-div flex flex-col items-center relative">
        {props.children}
      </div>
    );

  return (
    <div>
      {props.children}
    </div>
  );
};
export default Popover;
