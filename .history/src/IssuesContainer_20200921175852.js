import React, { useEffect, useState } from 'react'
import './IssuesContainer.css';
import Info from './Info';
import IssueDesc from './IssueDesc';
import axios from "axios";
import {actionTypes} from './store/actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useInfiniteScroll from '@closeio/use-infinite-scroll';

function IssuesContainer() {
   
    const store = useSelector((store)=>{ return store;});
    const dispatch = useDispatch();
    const [hasMore, setHasMore] = useState(false);
    const [page, loaderRef, scrollerRef] = useInfiniteScroll({ hasMore });
    // const [response, setResponse] = useState([])
    const access_token = 'b2d658945a3a688744895375ef15fc775205881e';

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/http://api.github.com/repos/facebook/create-react-app/issues', {
            headers: {
                'Authorization': `token ${access_token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                // setResponse(res.data)
                dispatch({type: actionTypes.SET_RES,payload: res.data});
                // setHasMore(res.hasMore);
                // setResponse((prev) => [...prev, res.data]);
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);

    // useEffect(async () => {
    //     const res = await axios.get('https://cors-anywhere.herokuapp.com/http://api.github.com/repos/facebook/create-react-app/issues', {
    //         headers: {
    //             'Authorization': `token ${access_token}`
    //         }
    //     })({ page });
    //     setHasMore(res.data.hasMore);
    //     setResponse((prev) => [...prev, res.data]);
    // }, [page]);

    return (
        // console.log
        <div className="issues__container" ref={scrollerRef}>
            <div className="info">
                <Info title="Author" />
                <Info title="Label" />
                <Info title="Projects" />
                <Info title="Milestones" />
                <Info title="Assignee" />
                <Info title="Sort" />
            </div>
            <div className="description">
                {
                    // if(response){}
                    (response)?
                ({store.response.map((ele, id) => {
                    if (id == 0){
                        return (<div key={id} className="first"><IssueDesc title={ele.title} desc={`#${ele.number} opened at ${ele.updated_at} by ${ele.user.login}`} issue={ele.labels.length > 0} triage={ele.labels.length > 1} chat={ele.comments} /></div>)
                    }
                    return (<IssueDesc key={id} title={ele.title} desc={`#${ele.number} opened at ${ele.updated_at} by ${ele.user.login}`} issue={ele.labels.length > 0} triage={ele.labels.length > 1} chat={ele.comments} />)
                })}):
                }
            </div>
        </div>
    )
}

export default IssuesContainer
