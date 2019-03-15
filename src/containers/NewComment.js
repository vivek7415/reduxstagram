import React from 'react';
import Input from '../components/UI/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../Store/Actions/index';

class NewComment extends React.Component {
    state = {
        commentForm: {
            user: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'User Name...',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            text: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Comment...',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },

        },   

    }

    commentHandler = (event) => {
        event.preventDefault();
        // console.log(event);
        const formData = {};
        for (let formElementIdentifier in this.state.commentForm) {
            formData[formElementIdentifier] = this.state.commentForm[formElementIdentifier].value;
        }
        const commentData = {
            comment: formData,
            code: this.props.code,
        };
        this.props.onCommentSubmit(commentData);
        this.resetForm();
        
        //    console.log(hello);
    }

    resetForm = () => {
        const updatedCommentForm = { ...this.state.commentForm };
        for(let formElementIdentifier in updatedCommentForm){
            updatedCommentForm[formElementIdentifier].value = ''; 
        }
        this.setState({ commentForm: updatedCommentForm });
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedCommentForm = { ...this.state.commentForm };
        const updatedFormElement = { ...updatedCommentForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedCommentForm[inputIdentifier] = updatedFormElement;
        // console.log(updatedCommentForm, updatedFormElement);
        this.setState({ commentForm: updatedCommentForm });
    }
    render() {

        const formElement = [];
        for (let key in this.state.commentForm) {
            formElement.push({
                id: key,
                config: this.state.commentForm[key],
            })
        }

        let form = (
            <form onSubmit={this.commentHandler}>
                {formElement.map((formElement) => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangeHandler(event, formElement.id)}
                    />
                ))}
                <button style={{ display: 'none' }}>submit</button>

            </form>
        );

        return form;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCommentSubmit: (commentData) => dispatch(actions.addComments(commentData)),
    };
};

export default connect(null, mapDispatchToProps)(NewComment);