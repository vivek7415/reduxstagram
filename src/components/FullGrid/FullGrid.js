import React from 'react';
// import { connect } from 'react-redux';
import classes from './FullGrid.css';
import Heart from '../../assets/icons8-heart-100.png';
import Comment from '../../assets/comment-white-oval-bubble.png';



class FullGrid extends React.Component {

   
   
    render() {
        const Posts = (
            <div className={classes.SingleElement}>
                <img className = {classes.Image} src={this.props.image} alt=""
                    onClick={() => this.props.singleView(this.props.code)} />
                <p
                    onClick={() => this.props.singleView(this.props.code)}
                    className = {classes.Caption}>{this.props.caption}</p>
                <div className = {classes.User}>
                    <div className={classes.UserInterest}
                        onClick={() => this.props.likesIncrement(this.props.code)}>
                        <img className = {classes.Image2} src={Heart} alt="" />
                        <h6 className = {classes.Likes} >{this.props.likes}</h6>
                    </div>
                    <div className={classes.UserInterest}
                        onClick={() => this.props.singleView(this.props.code)}>
                        <img className = {classes.Image2} src={Comment} alt="" />
                        <h6 className = {classes.Likes} >{this.props.commentNumber}</h6>
                        {/* <h6>Comment</h6> */}
                    </div>
                </div>
            </div >
        );

        return Posts;
    }
}

export default FullGrid;