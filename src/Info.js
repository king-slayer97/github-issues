import React from 'react';
import './Info.css';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

function Info({title}) {
    return (
        <div className="info">
            <p>{title}</p>
            <ArrowDropDownOutlinedIcon/>
        </div>
    )
}

export default Info
