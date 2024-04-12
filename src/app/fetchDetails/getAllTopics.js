import axios from "axios";

export const getAllTopics = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_TOPICS}`
    );

    return response.data?.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
