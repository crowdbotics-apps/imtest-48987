import axios from "axios"
import {
  CONNECTOR_SIX_CONNECTOR_PASSWORD,
  CONNECTOR_SIX_CONNECTOR_USERNAME
} from "react-native-dotenv"
const sixconnector = axios.create({
  baseURL: "https://crowdbotics.com",
  auth: {
    username: CONNECTOR_SIX_CONNECTOR_PASSWORD,
    password: CONNECTOR_SIX_CONNECTOR_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
