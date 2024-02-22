import axios from "axios";

export const fetchInterviewExperience = async (isAdmin, startingIndex) => {
  console.log(isAdmin, startingIndex);
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_INTERVIEW_EXPERIENCE}/${isAdmin}/${startingIndex}`
    );
    if (res.data?.success === true)
      return {
        data: res.data?.data,
        len: res.data?.totalLength,
      };
  } catch (e) {
    console.log(e);
  }
};
