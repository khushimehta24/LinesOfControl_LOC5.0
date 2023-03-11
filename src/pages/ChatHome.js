import { Grid } from '@mui/material'
import React from 'react'
import { CometChatUserListWithMessages } from '../sections/cometchat-pro-react-ui-kit/CometChatWorkspace/src'

function ChatHome() {
    return (
        <Grid container sx={{ display: 'flex', height: '100%' }}>

            <CometChatUserListWithMessages hi="hi" />
        </Grid>
    )
}

export default ChatHome