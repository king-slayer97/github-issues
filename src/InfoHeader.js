import React from 'react';
import './InfoHeader.css';
import {IconButton} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StarIcon from '@material-ui/icons/Star';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CodeIcon from '@material-ui/icons/Code';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ComputerIcon from '@material-ui/icons/Computer';
import {useDispatch} from 'react-redux';
import {actionTypes} from './store/actions';
import {useSelector} from 'react-redux';

function InfoHeader() {
    const dispatch = useDispatch();
    const store = useSelector((store)=>{return store;})
    const style={
        fontSize: 'small',
        color: 'gray',
    }
    return (
        <div className="infoheader">
            <div className="topInfo">
                <div className="topLeft">
                    <ComputerIcon/>
                   <p>facebook</p> / <h3>create-react-app</h3> 
                </div>
                <div className="topRight">
                    <div className="buttons">
                        <button onClick={()=>dispatch({type:actionTypes.INC_W})}> <VisibilityIcon/>Watch</button>
                        <div className="counts">
                            {store.watch}
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={()=>dispatch({type:actionTypes.INC_U})}><StarIcon/>Unstar</button>
                        <div className="counts">
                            {store.unstar}
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={()=>dispatch({type:actionTypes.INC_F})}><MergeTypeIcon/>Fork</button>
                        <div className="counts">
                            {store.fork}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottomInfo">
                <div className="desc">
                    <CodeIcon/>
                    <p className="content">Code</p>
                </div>
                <div className="desc active">
                    <ErrorOutlineIcon/>
                    <p className="content">Issues <span className="count">495</span></p>
                </div>
                <div className="desc">
                    <SaveAltIcon/>
                    <p className="content">Pull Requests <span className="count">119</span></p>
                </div>
                <div className="desc">
                    <ForumOutlinedIcon/>
                    <p className="content">Discussions  <FiberManualRecordIcon style={style}/></p>
                </div>
                <div className="desc">
                    <PlayCircleOutlineIcon/>
                    <p className="content">Actions</p>
                </div>
                <div className="desc">
                <AssessmentOutlinedIcon/>
                    <p className="content">Projects <span className="count">3</span></p>
                </div>
                <IconButton>
                <MoreHorizIcon/>
                </IconButton>
            </div>

        </div>
    )
}

export default InfoHeader;
