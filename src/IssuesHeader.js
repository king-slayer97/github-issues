import React from 'react';
import './IssuesHeader.css';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';

function IssuesHeader() {
    return (
        <div className="issues__header">
            <div className="content__left">
                <button><div className="filter__button">Filters <ArrowDropDownOutlinedIcon /></div></button>
                <div className="input__issue">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="is:issue is:open"/>
                </div>
            </div>
            <div className="content__right">
                <div className="buttons">
                <button className="btn-label"><LabelOutlinedIcon/><div className="content"> Labels   <span className="count">30</span></div></button>
                <button className="btn-milestone"><AccountBalanceOutlinedIcon/><div className="content">Milestones   <span className="count">4</span></div></button>
                </div>
                
                <div className="new__issue">
                <button>New issue</button>
                </div>
            </div>
        </div>
    )
};

export default IssuesHeader
