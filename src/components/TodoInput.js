import React, {Component, Fragment} from 'react'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Creators as TodosActions} from '../store/ducks/todos'

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    padding-top: 60px;
    border: 1px 2px black;
`;

const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 300px;
    display: flex;

    input{
        flex: 1;
        height: 55px;
        padding 0 20px;
        background: #FFF;
        border: 0;
        font-size: 18px;
        color: #444;
    }

    button {
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #63f5b8;
        color: #FFF;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;
    }
`

class TodoInput extends Component
{
    state = {
        taskInput: '',
    }

    addNewTask = (event) => {
    
        event.preventDefault();
        this.props.addTaskRequest(this.state.taskInput);
        this.setState({taskInput: ''});
    }

    render()
    {
        return(
            <Fragment>
                <Container>
                <Form onSubmit={this.addNewTask}>
                    <input
                        placeholder="Enter new Task"
                        value={this.state.taskInput}
                        onChange={e => this.setState({taskInput: e.target.value})}
                    />
                    <button type="submit">ADD</button>
                </Form>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => bindActionCreators(TodosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)