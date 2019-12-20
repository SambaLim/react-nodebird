import Ract from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'

const Profile = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" integrity="sha256-2uyr7nIbvnMXjIvOxVrJ/NnnWWUSWOY4M9BTOjFsdps=" crossorigin="anonymous" />
            </Head>
            <AppLayout>
                <div>내 프로필</div>
            </AppLayout>
        </>
    )
}

export default Profile