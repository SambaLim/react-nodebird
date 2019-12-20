import React, { useState } from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { Form, Input, Checkbox, Button } from 'antd'

const Signup = () => {

    const [id, setId] = useState('')
    const [nick, setNick] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [term, setTerm] = useState(false)

    const onSubmit = () => {

    }
    const onChangeId = () => {
        setId(e.target.value)
    }
    const onChangeNick = () => {
        setNick(e.target.value)
    }
    const onChangePassword = () => {
        setPassword(e.target.value)
    }
    const onChangePasswordCheck = () => {
        setPasswordCheck(e.target.value)
    }
    const onChangeTerm = () => {
        setTerm(e.target.value)
    }
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" integrity="sha256-2uyr7nIbvnMXjIvOxVrJ/NnnWWUSWOY4M9BTOjFsdps=" crossorigin="anonymous" />
            </Head>
            <AppLayout>
                <Form onSubmit= { onSubmit } style= {{ padding: 10 }}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br/>
                        <Input name="user-id" value={ id } required onChange={ onChangeId }/>
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br/>
                        <Input name="user-nick" value={ nick } required onChange={ onChangeNick }/>
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br/>
                        <Input name="user-password" value={ password } required type="password" onChange={ onChangePassword }/>
                    </div>
                    <div>
                        <label htmlFor="user-password-check">비밀번호</label>
                        <br/>
                        <Input name="user-password-check" value={ passwordCheck } required type="password" onChange={ onChangePasswordCheck }/>
                    </div>
                    <div>
                        <Checkbox name="user-term" value={ term } onChange={ onChangeTerm }>삼바의 말을 잘 들을 것을 동의합니다.</Checkbox>
                    </div>
                    <div>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    )
}

export default Signup