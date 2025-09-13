/* eslint-disable react/prop-types */

import React from 'react';

// To stop unnecessary re-renders we use React.memo
const ChildA = React.memo(
    (props) => {
        console.log("ChildA rerendered")
        return (
            <div>ChildA {props.prop}</div>
        )
    }
);

// Assign a display name for debugging
ChildA.displayName = "ChildA";

export default ChildA