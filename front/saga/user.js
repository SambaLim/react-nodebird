import { all, fork, takeLatest, takeEvery, call, put, take } from 'redux-saga/effects'
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user'
import axios from 'axios'

function loginAPI() {
    return axios.get('/login')
}

function signUpAPI() {
    return axios.get('/login')
}

function* login() {
    try {
        yield delay(2000)
        //yield call(loginAPI)
        yield put({ // dispatch와 같은역할
            type: LOG_IN_SUCCESS
        })
    } catch(e) {
        yield put({
            type: LOG_IN_FAILURE
        })
    }
}

function* signUp() {
    try {
        yield delay(2000)
        //yield call(signUpAPI)
        yield put({
            type: SIGN_UP_SUCCESS,
        })
    } catch(e) {
        console.error(e)
        yield put({
            type: SIGN_UP_FAILURE,
        })
    }
}

function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login)
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchSignUp)
    ])
}