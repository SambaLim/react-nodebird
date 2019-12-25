import React from 'react'
import { Form, Input, Card, List, Button, Icon }from 'antd'

const Profile = () => {
    return (
        <div>
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={['삼바림', '킹', '오피셜']}
                renderItem={item => (
                <List.Item style={{ marginTop: '20px' }}>
                    <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
                </List.Item>
                )}
            />
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={['삼바림', '킹', '오피셜']}
                renderItem={item => (
                <List.Item style={{ marginTop: '20px' }}>
                    <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
                </List.Item>
                )}
            />
        </div>
    )
}

export default Profile