import { HYDRATE } from "next-redux-wrapper"
import { handleActions } from "redux-actions"
import { createAction, createRequestSaga } from "redux-actions"
import { takeLatest } from "redux-saga/effects"


const USER_JOIN = 'user/USER_JOIN'
const USER_JOIN_SUCCESS = 'user/USER_JOIN_SUCCESS'

export const userJoin = createAction(USER_JOIN, payload => payload)

const userJoinSaga = createRequestSaga(USER_JOIN, api.userJoin)

export function* userSaga(){
    alert("진행 2 사가가 이벤트를 인지함")
    yield takeLatest(USER_JOIN, userJoinSaga)
}

const initialState = {
    users:[],
    loginUser: {
        isLogginIn: false,
        data: null
    }
}

const user = handleActions({
    [HYDRATE]: (state, action) => ({
        ...state,
        post: action.payload
    }),
    [USER_JOIN_SUCCESS]: (state, action) => ({
        ...state,
        post: action.payload
    })
}, initialState)

export default user