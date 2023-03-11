import httpCommon from "../http-common";

const getEvent = () => {
    return httpCommon.get(`/events/get_all_events/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
}

export default { getEvent }