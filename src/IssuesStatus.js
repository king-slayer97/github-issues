import React from 'react'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckIcon from '@material-ui/icons/Check';
import './IssuesStatus.css';

function IssuesStatus() {
    return (
        <div className="issue__status">
            <div className="open">
                <ErrorOutlineIcon />495 Open
            </div>
            <div className="close">
                <CheckIcon />5,465 Closed
            </div>
        </div>
    )
}

export default IssuesStatus
