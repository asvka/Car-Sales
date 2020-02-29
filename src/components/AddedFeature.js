import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
