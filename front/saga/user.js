import { all, fork, takeLatest, takeEvery, call, put, take } from 'redux-saga/effects'
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

function* hello() {
    yield delay(1000)
    yield put({
        type: 'BYE_SAGA'
    })
}

function* watchHello() {
    yield takeEvery(HELLO_SAGA, hello)
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchHello)
    ])
}