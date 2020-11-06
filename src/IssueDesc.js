import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import './IssueDesc.css';

function IssueDesc({ title, desc, chat, triage, issue }) {
    return (

        <div className="issue__desc">
            <div className="heading">
                <ErrorOutlineIcon />
                <h4>{title}</h4>
                {issue ?
                    (<button className="btn-issue"><h3>issue: bug report</h3></button>) :
                    (<></>)}
                {triage ?
                    (<button className="btn-triage"><h3>needs triage</h3></button>) :
                    (<></>)}
                {chat>0 ?
                    (<span className="chat"><ChatBubbleOutlineIcon /> 1</span>) :
                    (<></>)}
            </div>

            <div className="desc">
                <p>{desc}</p>
            </div>
        </div>)

}

export default IssueDesc
