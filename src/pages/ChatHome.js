import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { CometChatUserListWithMessages } from '../sections/cometchat-pro-react-ui-kit/CometChatWorkspace/src';
import { CometChat } from '@cometchat-pro/chat';

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

    return (
        <Grid container sx={{ display: 'flex', height: '100%' }}>
            <CometChatUserListWithMessages hi="hi" />
        </Grid>
    );
}

export default ChatHome;