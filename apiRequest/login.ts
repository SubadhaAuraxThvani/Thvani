
// apiRequest/login.ts
import axios from 'axios';

interface LoginCredentials {
  email: string;
  password: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const LoginUser = async (credentials: LoginCredentials) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/login`,
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    // Log the full error response for debugging
    if (axios.isAxiosError(error)) {
      console.log('Error Response Data:', error.response?.data);
      console.log('Error Status:', error.response?.status);
    }
    throw error;
  }
};