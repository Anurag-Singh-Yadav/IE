import axios from "axios";
export const adminChoics = async (id, isAdminAccepted) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_ADMIN_URL}${process.env.NEXT_PUBLIC_ADMIN_TO_ACCEPTS_INTERVIEW_BLOG}`,{
        isAdminAccepted,
        id
    })
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
