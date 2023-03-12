import httpCommon from "../http-common";

const getUserEvents = (id) => {
    return httpCommon.get(`/events/${id}/all_events_user/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

const getUserPortfolio = () => {
    return httpCommon.get(`/portfolio/photo-list/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

const eventRegister = (data) => {
    return httpCommon.post(`/events/on_register/`, data, {
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}

const getRentals = (id) => {
    return httpCommon.get(`/rentals/${id}/all_products_user/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
    })
}


export default { getUserEvents, getUserPortfolio, eventRegister, getRentals }