import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import FullGrid from '../components/FullGrid/FullGrid';
import classes from './Main.css';
import Modal from '../components/UI/Modal/Modal';
import SingleView from '../components/SingleView/SingleView';
import * as actions from '../Store/Actions/index';
import Aux from '../hoc/Aux';

class Main extends React.Component {

    state = {
        show: false,
    }

    componentDidMount() {
        // for(let comment in this.props.comments){

        // }
        // console.log(this.props.comments);

    }

    showSingleViewHandler = (code) => {
        this.setState({ show: true });
        // console.log(code);
        this.props.onSinglePostHandler(code);
        this.props.onSinglePostCommentHandler(code);
    }

    closeSingleViewHandler = () => {
        this.setState({ show: false });
    }

    likesIncrementHandler = (code) => {
        this.props.onLikesIncrementHandler(code);

    };

    removeCommentHandler = (i, code) => {
        // console.log(i,code);
        this.props.onRemoveComment(i, code);
    }

    render() {
        const allPosts = (this.props.posts.map(post => {
            const code = post.code;
            const commentArray = this.props.allComment[code];
            let commentNumber = 0;
            if (commentArray) {
                commentNumber = commentArray.length;
            }

            // console.log(code, commentNumber)
            return (
                <FullGrid
                    key={post.id}
                    image={post.display_src}
                    likes={post.likes}
                    caption={post.caption}
                    code={post.code}
                    singleView={(code) => this.showSingleViewHandler(code)}
                    likesIncrement={(code) => this.likesIncrementHandler(code)}
                    commentNumber={commentNumber}
                />
            );

        }));
        let singlePost = null;
        if (this.props.singlePost) {
            let commentNumber = 0;
            // console.log("main ttriggered");
            if (this.props.comments)
                 commentNumber = this.props.comments.length;
            // console.log(commentNumber);
            singlePost = (
                <SingleView
                    key={this.props.singlePost.id}
                    code={this.props.singlePost.code}
                    likes={this.props.singlePost.likes}
                    caption={this.props.singlePost.caption}
                    comments={this.props.comments}
                    image={this.props.singlePost.image}
                    likesIncrement={(code) => this.likesIncrementHandler(code)}
                    removeComment={(i) => this.removeCommentHandler(i, this.props.commentId)}
                    commentNumber={commentNumber}
                />

            );
        }

        return (
            <Aux>
                <Header />
                <Modal show={this.state.show}
                    modalClosed={this.closeSingleViewHandler}>
                    {/* {commentNumber} */}
                    {singlePost}
                </Modal>
                <div className={classes.Main}>
                    {allPosts}
                </div>
            </Aux>

        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        singlePost: state.posts.singlePost,
        comments: state.comments.singlePostComment,
        allComment: state.comments.comments,
        commentId: state.comments.commentId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSinglePostHandler: (code) => dispatch(actions.singlePostOpen(code)),
        onSinglePostCommentHandler: (code) => dispatch(actions.showComments(code)),
        onLikesIncrementHandler: (code) => dispatch(actions.incrementLikes(code)),
        onRemoveComment: (i, code) => dispatch(actions.deleteComments(i, code)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);