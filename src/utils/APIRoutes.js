export const host = process.env.REACT_APP_API_URL;

export const verifyUserRoute = `${host}/api/auth`;
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const setAvatarRoute = `${host}/api/auth/setAvatar`;
export const allUsersRoute = `${host}/api/auth/allUsers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const getAllMessagesRoute = `${host}/api/messages/getmsg`;
