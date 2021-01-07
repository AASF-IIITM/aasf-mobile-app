const BASE_URL = 'http://aasf-api.centralindia.cloudapp.azure.com:3000';

const USERS_URL = `${BASE_URL}/users`;
export const LOGIN_URL = `${USERS_URL}/login`;
export const USER_DETAILS_URL = `${USERS_URL}/details`;
export const LEADERBOARD_URL = `${USERS_URL}/leaderboard`;
export const PASSWORD_URL = `${USERS_URL}/password`;
export const FCM_TOKEN_URL = `${USERS_URL}/fcmToken`;

export const EVENTS_URL = `${BASE_URL}/events`;
export const ATTENDANCE_URL = `${EVENTS_URL}/attendance`;
