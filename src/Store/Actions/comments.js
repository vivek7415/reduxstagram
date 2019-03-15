import * as actionTypes from './ActionTypes';

export const showComments = (code) => {
    return {
        type: actionTypes.SHOW_COMMENTS,
        code: code
    };
};

export const addComments = (commentData) => {
    return{
        type: actionTypes.ADD_COMMENTS,
        commentData
    };
};

export const deleteComments = (i, code) => {
    return{
        type: actionTypes.DELETE_COMMENTS,
        code,
        i
    };
};