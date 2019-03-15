import React from 'react';
import classes from './SingleView.css';
import Aux from '../../hoc/Aux';
import NewComment from '../../containers/NewComment';
import Heart from '../../assets/icons8-heart-100.png';
import Comment from '../../assets/comment-white-oval-bubble.png';

const singleView = (props) => {
    let comment = null;
    if (props.comments) {
        comment = props.comments.map((comment, i) => {
        //  console.log(comment, i);
         return(
            <div
                key={i}
                className={classes.SingleComment}
            >
                <p className={classes.CommentText}><strong>{comment.user}: </strong>
                    {comment.text}
                    <button className={classes.RemoveComment}
                        onClick={() => props.removeComment(i)}>&times;</button></p>
            </div>
        )});
    }

    return (

        <Aux>
            <div className={classes.SingleView}>
                <div className={classes.SingleElement}>
                    <img className={classes.Image} src={props.image} alt="" />
                    <p className={classes.Caption}>{props.caption}</p>
                    <div className={classes.User} >
                        <div className={classes.UserInterest}
                            onClick={() => props.likesIncrement(props.code)}>
                            <img className={classes.Image2} src={Heart} alt="" />
                            <h6 className={classes.Likes}>{props.likes}</h6>
                        </div>
                        <div className={classes.UserInterest}>
                            <img className={classes.Image2} src={Comment} alt="" />
                            <h6 className={classes.Likes}>{props.commentNumber}</h6>

                        </div>
                    </div>
                </div >

                <div className={classes.Comment}>
                    {comment}
                    <NewComment code={props.code} />

                </div>

            </div>
        </Aux>
    );

};

export default singleView;