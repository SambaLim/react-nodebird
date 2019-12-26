import React from 'react'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import NicknameEditForm from '../components/NicknameEditForm'

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
    return (
        <div>
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