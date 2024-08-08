import axios from "axios"
import {
  CONNECTOR_NEW_FIVE_PASSWORD,
  CONNECTOR_NEW_FIVE_USERNAME
} from "react-native-dotenv"
const newfive = axios.create({
  baseURL: "https://devstringx.com",
  auth: {
    username: CONNECTOR_NEW_FIVE_PASSWORD,
    password: CONNECTOR_NEW_FIVE_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
