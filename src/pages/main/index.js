import React, {Component, Fragment} from 'react';

import TodoList from '../../components/TodoList';
import TodoInput from '../../components/TodoInput';
import Header from '../../components/Header'


export default class Main extends Component {

    render()
    {
        return(
            <Fragment>
                <Header />
                <TodoList />
                <TodoInput />
            </Fragment>
        )
    }
}

