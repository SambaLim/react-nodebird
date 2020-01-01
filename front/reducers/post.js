export const initialState = {
    mainPosts: [
        { User: {
            id: 1,
            nickname: '삼바림'
        },
        content: '첫 번째 게시물',
        img: 'https://i.imgur.com/DxH71p6.png'
    }],
}

export const ADD_POST = 'ADD_POST'
export const ADD_DUMMY = 'ADD_DUMMY'

const addPost = {
    type: ADD_POST,
}

const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 1,
        User: {
            nickname: '삼바림'
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
            }
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default reducer