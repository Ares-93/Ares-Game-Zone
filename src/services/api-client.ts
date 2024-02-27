import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4de10a453cb5429786a34ddd03e7df99",
  },
});
