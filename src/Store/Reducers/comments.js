// import posts from '../../data/posts';
import comments from '../../data/comments';
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    comments,
    singlePostComment: null,
    commentId: null,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_COMMENTS:
            const code = action.code;
            const comment = comments[code];

            // console.log(code, comments[code], comments);
            // const userComments = comment.map(comment => )
            return {
                ...state,
                singlePostComment: comment,
                commentId: code,
            };
        case actionTypes.ADD_COMMENTS:
            const newComment = action.commentData.comment;
            const commentCode = action.commentData.code;
            let updatedComments = { ...state };
            if (updatedComments.comments[commentCode]) {
                updatedComments.comments[commentCode] = [...updatedComments.comments[commentCode],newComment];
                updatedComments.singlePostComment = updatedComments.comments[commentCode];
            }
            else {
                updatedComments.comments[commentCode] = [newComment];
                updatedComments.singlePostComment = [newComment];
                updatedComments.commentId = commentCode;
            }
            // state = { ...state, ...updatedComments };
            // console.log(updatedComments.singlePostComment, state);
            return {
                ...state,
                singlePostComment: updatedComments.singlePostComment

            };

        case actionTypes.DELETE_COMMENTS:
            const DelCommentCode = action.code;
            const DelCommentIndex = action.i;
            const Comment = { ...state };
            const SingleComment = [...Comment.comments[DelCommentCode]];
            let xxx = [...SingleComment.slice(0, DelCommentIndex)];
            const yyy = [...SingleComment.slice(DelCommentIndex + 1)];
            xxx = xxx.concat(yyy);
            Comment.comments[DelCommentCode] = xxx;
            // console.log(xxx);
            // Comment = {...state, SingleComment};
            return {
                ...state,
                singlePostComment: xxx
            };
        default:
            return state;
    }
}

export default Reducer;