import React from 'react';

interface AdvanceToolTipProps{
    tooltipText?:string;
    tooltipColor?:string;

}
const AdvanceToolTip:React.FC<AdvanceToolTipProps>=({tooltipText,tooltipColor})=>{
  return (
    <>asdfasdfasdfasdfasdf{tooltipText}{tooltipColor}</>
  )
}

export default AdvanceToolTip;