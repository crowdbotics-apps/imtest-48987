import axios from "axios"
const imtestAPI = axios.create({
  baseURL: "https://imtest-48987.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return imtestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_imvbdj_list(payload) {
  return imtestAPI.get(`/api/v1/imvbdj/`)
}
function api_v1_imvbdj_create(payload) {
  return imtestAPI.post(`/api/v1/imvbdj/`, payload)
}
function api_v1_signup_create(payload) {
  return imtestAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return imtestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return imtestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return imtestAPI.patch(`/rest-auth/user/`, payload)
}
function api_docs_schema_retrieve(payload) {
  return imtestAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function rest_auth_login_create(payload) {
  return imtestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return imtestAPI.post(`/rest-auth/logout/`)
}
function api_v1_imvbdj_retrieve(payload) {
  return imtestAPI.get(`/api/v1/imvbdj/${payload.id}/`)
}
function api_v1_imvbdj_update(payload) {
  return imtestAPI.put(`/api/v1/imvbdj/${payload.id}/`, payload)
}
function api_v1_imvbdj_partial_update(payload) {
  return imtestAPI.patch(`/api/v1/imvbdj/${payload.id}/`, payload)
}
function api_v1_imvbdj_destroy(payload) {
  return imtestAPI.delete(`/api/v1/imvbdj/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return imtestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return imtestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_change_create(payload) {
  return imtestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return imtestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return imtestAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return imtestAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
export const apiService = {
  api_v1_login_create,
  api_v1_imvbdj_list,
  api_v1_imvbdj_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  api_v1_imvbdj_retrieve,
  api_v1_imvbdj_update,
  api_v1_imvbdj_partial_update,
  api_v1_imvbdj_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create
}
