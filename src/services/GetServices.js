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

const rentals = () => {
    return httpCommon.get(`/rentals/get_all_products/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

const search = () => {
    return httpCommon.post(`/rentals/search_product/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

const feed = () => {
    return httpCommon.get(`/portfolio/photo-following/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

export default { getUserEvent, users, getChat, follow, rentals, search, feed }