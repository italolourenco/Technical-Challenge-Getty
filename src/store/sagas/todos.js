import {call, put} from 'redux-saga/effects';
import api from '../../services/api';

import {Creators as TodosActions } from '../ducks/todos';

export function* getTasks(){
    try{
        const response = yield call(api.get, '/tasks');

        yield put(TodosActions.getTaksSucesses(response.data))
    }catch (err){
        console.log(err);
    }
}

export function* removeTask(action)
{
    try{
        const response = yield call(api.delete, `/tasks/${action.payload.id}`);
        yield put(TodosActions.removeTaskSuccess(action.payload.id))
    }catch(err){
        console.log(err);
    }
}

export function* addTask(action){
    try{

        let newTask = {
            id: Math.random(),
            text: action.payload.task
        }

        const response = yield call(api.post, '/tasks', newTask);
        yield put(TodosActions.addTaskSuccess(newTask))
    }catch (err){
        console.log(err);
    }
}

export function* updateTask(action)
{
    try{

        let update = {
            text: action.payload.task.text
        }

        const response = yield call(api.patch, `/tasks/${action.payload.task.id}`, update);
        yield put(TodosActions.updateTaskSuccess(response.data))
    }catch(err){
        console.log(err);
    }
}