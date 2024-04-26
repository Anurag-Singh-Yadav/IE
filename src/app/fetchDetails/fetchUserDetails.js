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

export const getUserAnalytics = async (token, userHandle) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_USER_ANALYTICS}`,
      {
        token,
        userHandle,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    return res;
  } catch (e) {
    console.log(e);
    throw new Error("Error while fetching user data");
  }
};

export const fetchUserByHandle = async (userHandle) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_USER_DATA}`,
      {
        userHandle,
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching user");
  }
};

export const fetchUsersByUserInput = async (search) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_SEARCH_USERS}`,
      {
        search,
      }
    );
    return res.data?.data;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching user");
  }
};

export const fetchLeaderboardPage = async (pageNumber) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_LEADERBOARD_PAGE}/${pageNumber}`
    );
    return res.data?.data;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching leaderboard");
  }
};

export const profileViewed = async (token, userHandle) => {
  console.log(userHandle , '<**>');
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_PROFILE_VIEWED}`,
      {
        token,
        userHandle,
      }
    );
  } catch (err) {
    console.log('/fetchUserdetails ---> ' , err);
    throw new Error("Profile view increment failed");
  }
};

export const addFollower = async (token , userHandle) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_ADD_FOLLOWER}`,
      {
        token,
        followed:userHandle,
      }
    );
    return res.data?.success;
  } catch (err) {
    throw new Error("Error while following user");
  }
}

export const removeFollower = async (token , userHandle) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_REMOVE_FOLLOWER}`,
      {
        token,
        followed:userHandle,
      }
    );
    return res.data?.success;
  } catch (err) {
    throw new Error("Error while unfollowing user");
  }
}

