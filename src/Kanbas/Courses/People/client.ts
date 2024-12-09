import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/people`;

export const findPeopleInCourse = async (courseId: string) => {
  if (courseId) {
    const response = await axios.get(`${USERS_API}/${courseId}`);
    return response.data;
  }
};
