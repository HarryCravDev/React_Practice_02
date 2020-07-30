import axios from "axios";

const KEY = "AIzaSyA7Z1AZimc19rn4GnFkqwUzJ9Q7fPJvu1k";

export const baseParams = {
  part: "snippet",
  maxResults: 8,
  type: "video",
  key: KEY,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
