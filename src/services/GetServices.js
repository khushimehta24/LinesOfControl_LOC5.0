import httpCommon from "../http-common";

const getUserEvent = () => {
    return httpCommon.get(`/events/all_events_user/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

const users = () => {
    return httpCommon.get(`/accounts/user-list/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

const getChat = () => {
    return httpCommon.get(`/engagement/follow-list`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

const follow = (data) => {
    return httpCommon.post(`/engagement/follow/`, data, {
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

export default { getUserEvent, users, getChat, follow }