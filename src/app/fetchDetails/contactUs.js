import axios from "axios";

export const contactUs = async (data, token) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_CONTACT_US}`,
      {
        name: data.name,
        email: data.email,
        message: data.message,
        token: token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "Unknown Error");
  }
};
