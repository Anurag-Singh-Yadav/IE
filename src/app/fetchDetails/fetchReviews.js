import axios from "axios";

export const fetchReviews = async (isAdmin) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}${
        process.env.NEXT_PUBLIC_GET_WEBSITE_REVIEWS
      }/${isAdmin}`
    );
    return response.data?.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
