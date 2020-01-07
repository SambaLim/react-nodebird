import { all, fork, takeLatest, call, put, take } from 'redux-saga/effects'
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user'

const HELLO_SAGA = 'HELLO_SAGA'

function loginAPI() {
    // 서버에 요청
}

function* login() {
    try {
        yield call(loginAPI)
        yield put({ // dispatch와 같은역할
            type: LOG_IN_SUCCESS
        })
    } catch(e) {
        yield put({
            type: LOG_IN_FAILURE
        })
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN, login)
}

function* helloSaga() {
    console.log('before saga')
    /* 반복하고 싶다면
    while(true) {
        yield take(HELLO_SAGA)
        console.log('hello saga')
    }
    */
    yield take(HELLO_SAGA) // HELLO_SAGA를 기다림
    console.log('hello saga')
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        helloSaga()
    ])
}