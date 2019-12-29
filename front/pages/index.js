import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import NicknameEditForm from '../components/NicknameEditForm'
import { loginAction, logoutAction } from '../reducers/user'

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [
        { User: {
            id: 1,
            nickname: '삼바림'
        },
        content: '첫 번째 게시물',
        img: 'https://i.imgur.com/DxH71p6.png'
    }]
}

const Home = () => {

    const dispatch = useDispatch()
    const { isLoggedIn, user } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(loginAction)
        dispatch(logoutAction)
    }, [])

    return (
        <div>
            {user ? <div>로그인 했습니다: { user.nickname }</div> : <div>로그아웃 했습니다.</div>}
            <NicknameEditForm />
            {dummy.isLoggedIn && <PostForm />}
            {dummy.mainPosts.map((c) => {
                return(
                    <PostCard key={c} post={c} />
                )
            })}
        </div>
    )
}

export default Home