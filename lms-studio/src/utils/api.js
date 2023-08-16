import axios from 'axios'

export const apiName = "lmsStudio";
export const lecturePath = "/lecture";
export const lecturePublicPath = "/lectures/public";
export const coursePath = "/courses";

const api = axios.create({
  baseURL: 'https://ax8w57g1dk.execute-api.ap-southeast-1.amazonaws.com/newenv'
})

export default api