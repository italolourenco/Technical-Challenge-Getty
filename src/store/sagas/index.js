import {all, takeLatest} from 'redux-saga/effects';


import {getTasks} from './todos'
import {removeTask} from './todos'
import {addTask} from './todos'
import {updateTask} from './todos'
import { Types } from '../ducks/todos';


export default function* rootSaga()
{
    yield all([
        takeLatest(Types.GET_REQUEST, getTasks),
        takeLatest(Types.DELETE_REQUEST, removeTask),
        takeLatest(Types.ADD_REQUEST, addTask),
        takeLatest(Types.UPDATE_REQUEST, updateTask)
    ])
}