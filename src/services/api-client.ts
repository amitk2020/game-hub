import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "70bc5fe215f84d6f880455c4eeccafde"
  }
});
