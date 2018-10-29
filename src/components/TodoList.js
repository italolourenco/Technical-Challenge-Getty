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

const RowTask = styled.li`
    list-style: none
    margin-bottom: 10px;
`;

const InputTask = styled.input`
    margin-right: 70px;
    text-align: center;
    flex: 1;
    height: 35px;
    padding 0 20px;
    background: beige;
    border: 0;
    font-size: 20px;
    color: #444;
    font-weight: bold;
`;

const ButtomChange = styled.button`
    margin-right: 10px;
    height: 35px;
    padding: 0 20px;
    margin-left: 10px;
    background: #e0d6d5;
    color: #FFF;
    border: 0;
    font-size: 18px;
    font-weight: bold;
    border-radius: 3px;
    cursor:pointer
    disabled:true
    
`

const ButtomRemove = styled.button`
    margin-right: 10px;
    height: 35px;
    padding: 0 20px;
    margin-left: 10px;
    background: #f56f63;
    color: #FFF;
    border: 0;
    font-size: 18px;
    font-weight: bold;
    border-radius: 3px;
    cursor:pointer
`

class TodoList extends Component
{
    state = {
        taskIdChange: null,
        buttomChangeStyle: {
            background:'#f5b863'
        }
    }

    componentDidMount()
    {
        this.props.getTaksRequest();
    };

    handleChange(text, todo) {
        var index = this.props.todos.data.indexOf(todo)
        this.props.todos.data[index].text = text;
        this.setState({taskIdChange: todo.id})
    }


    updateTask(todo)
    {
        this.props.updateTaskRequest(todo);
        this.setState({taskIdChange: null})
    };

    removeTask(todoId)
    {
        this.props.removeTaskRequest(todoId);
    };

    render()
    {
        return(       
            <Container>
            <Fragment>
            <ul>
                {this.props.todos.data.map(todo => (
                   <RowTask key={todo.id}>
                        <InputTask defaultValue={todo.text} onChange={e => this.handleChange(e.target.value, todo)} />
                        <ButtomChange disabled={this.state.taskIdChange === todo.id ? false : true} style={this.state.taskIdChange === todo.id ? this.state.buttomChangeStyle : null} onClick={() => this.updateTask(todo)}>Change</ButtomChange>
                        <ButtomRemove onClick={() => this.removeTask(todo.id)}>Remove</ButtomRemove>
                    </RowTask>
                ))}
            </ul>
            </Fragment>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos,

})

const mapDispatchToProps = dispatch => bindActionCreators(TodosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)