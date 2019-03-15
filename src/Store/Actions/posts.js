import * as actionTypes from './ActionTypes';

export const singlePostOpen = (code ) => {
    return {
        type: actionTypes.SINGLE_POST_OPEN,
        code: code
    };
};
export const singlePostClose = () => {
    return {
        type: actionTypes.SINGLE_POST_CLOSE,
    };
};

export const incrementLikes = (code) => {
    return{
        type: actionTypes.INCREMENT_LIKES,
        code: code
    };
}
