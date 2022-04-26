import { loginApi } from '@/store/apis/user'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as T from "@/store/types"



function* addUser(action){
    try{
        const newUser = yield response.json()
        yield put({
            type: T.USER_ADD_SUCCESS,
            payload: newUser.data
        }) 
    }catch(error){
        yield put({
            type: T.USER_ADD_FAIL,
            payload: error.message
        })
    }
}
export function* watchAddUser(){
    yield takeLatest(T.USER_ADD_REQUEST, addUser)
}


function* login(action){
    try{
        alert('4 >> Saga call')
        const res = yield call(loginApi, action.data)
        yield put({
            type: T.LOGIN_SUCCESS,
            data: res.data
        })
    }catch(err){
        yield put({
            type: T.LOGIN_FAIL,
            error: err.response.data
        })
    }
}
export function* watchLogin(){
    alert('3 >> Saga watch')
    yield takeLatest(T.LOGIN_REQUEST, login)
}