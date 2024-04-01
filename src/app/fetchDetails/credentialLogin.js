export const handleSubmit = async (formData, x) => {
  console.log("Form submitted:", formData);
  try {
    const response = x
      ? await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_REGISTER_USER}`,
          formData
        )
      : await axios.post(`${process.env.BASE_URL}${process.env.AUTO_LOGIN}`, {
          formData,
        });
    return response;
  } catch (e) {
    throw new Error("Error occured while logging in. Please retry later");
  }
};
