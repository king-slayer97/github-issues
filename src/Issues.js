import React from 'react';
import './Issues.css';
import IssuesHeader from './IssuesHeader';
import IssuesStatus from './IssuesStatus';
import IssuesContainer from './IssuesContainer';

function Issues() {
    return (
        <div className="issues">
            <IssuesHeader/>
            <IssuesStatus/>
            <IssuesContainer/>
        </div>
    )
}

export default Issues;
