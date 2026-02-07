import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// Get songs
const getSongs = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching songs!", error);
    throw error;
  }
};

const songService = {
  getSongs,
};

export default songService;
