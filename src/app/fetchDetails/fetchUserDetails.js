import axios from "axios";
export const fetchUserDetails = async (token) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_FETCH_USER_DETAILS}`,
      {
        token: token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
