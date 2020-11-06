import {actionTypes} from './actions';
const INITIAL_STATE = {
    watch: 1,
    unstar : 0,
    fork : 0,
    response: null,
    labels: null,
    triage : false,
    issue: false,
}



const reducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case actionTypes.INC_W:
            return({...state,watch:state.watch+1})

        case actionTypes.INC_U:
            return({...state,unstar:state.unstar+1})

        case actionTypes.INC_F:
            return({...state,fork:state.fork + 1})
            
            

        case actionTypes.TOGG_Issue:
            return({...state,issue: true})

        case actionTypes.SET_LABEL:
            return({...state,labels:action.labels})

        case actionTypes.TOGG_Triage:
            return({...state,triage: true})

        default:
            return state;
    }
}

export default reducer;