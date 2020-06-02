import axios from "axios";
const KEY = "AIzaSyBAA0kodhqGytGaDzuLaEIP9WjRdbts6I0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});
