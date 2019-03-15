import posts from '../../data/posts';
// import comments from '../../data/comments';
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    posts,
    singlePost: null
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SINGLE_POST_OPEN:
            const post = posts.find(post => post.code === action.code);
            return {
                ...state,
                singlePost: {
                    id: post.id,
                    code: post.code,
                    image: post.display_src,
                    caption: post.caption,
                    likes: post.likes
                }
            };
        case actionTypes.SINGLE_POST_CLOSE:
            return {
                ...state,
                singlePost: null
            };

        case actionTypes.INCREMENT_LIKES:
            const postLike = posts.find(post => post.code === action.code);
            postLike.likes = postLike.likes + 1;
            // const postIndex = posts.findIndex(post => post.code === action.code);
            // const newPost = posts;
            // newPost.postIndex = postLike;
            // console.log(posts.likes);
            return {
                ...state,
                singlePost: {
                    ...state.singlePost,
                    likes: postLike.likes
                },
            };
        default:
            return state;
    }
}

export default Reducer;


