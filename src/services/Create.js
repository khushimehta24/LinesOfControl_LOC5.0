import httpCommon from "../http-common";

const createEvent = (data) => {
    return httpCommon.post(`/events/create_event/`, data,{
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
}

const createPost=(data)=>{
    return httpCommon.post(`/portfolio/photo-post/`, data,{
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
}
const createRental=(data)=>{
  return httpCommon.post(`/rentals/create_rental/`, data,{
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`
    }
  })
}
export default { createEvent,createPost,createRental }