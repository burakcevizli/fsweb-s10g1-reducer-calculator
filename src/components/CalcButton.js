import React from 'react';

const CalcButton = (props) => {
  const { value,applyNumber, size = 4 } = props;

  return (<div className={`col-xs-${size}`}>
    <button value={value} type="button" onClick={() => { applyNumber(value); }} className="btn">{value}</button>
  </div>);
}

export default CalcButton;