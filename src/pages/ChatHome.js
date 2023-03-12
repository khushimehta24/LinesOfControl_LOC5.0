import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CometChatUserListWithMessages } from '../sections/cometchat-pro-react-ui-kit/CometChatWorkspace/src';
import { CometChat } from '@cometchat-pro/chat';
import GetServices from 'src/services/GetServices';

function ChatHome() {
    useEffect(() => {
        CometChat.login(JSON.parse(localStorage.getItem('lfuser')).uid, '7ce021dc74b204685fed46ac21090eb0547e8d6c').then(
            (user) => {
                console.log('Login Successful:', { user });
            },
            (error) => {
                console.log('Login failed with exception:', { error });
            }
        );
    }, []);
    const [uids, setUids] = useState([])

    useEffect(() => {
        const func = async () => {
            await GetServices.getChat()
                .then((res) => {

                    console.log(res)
                    const temp = [res.data.map((item) => {
                        return item.follower.uid
                    })]
                    console.log(temp)
                    setUids(temp)
                })
        }
        func()
    }, [])

    return (
        <Grid container sx={{ display: 'flex', height: '100%' }}>
            <CometChatUserListWithMessages uid={uids} />
        </Grid>
    );
}

export default ChatHome;