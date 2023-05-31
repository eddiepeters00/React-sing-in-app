import { useQuery, useMutation } from "react-query";
import axios from "axios";

export const getAllUsers = () => {
  return axios.get("/api/getAllUsers");
};

const addUser = (user) => {
  return axios.post("/api/register", user);
};

const signInUser = (user) => {
  axios.post("/api/sign-in", user);
};

export const useUserData = (onSuccess, onError) => {
  return useQuery("users", getAllUsers, {
    onSuccess,
    onError,
  });
};

export const useAddUser = () => {
  return useMutation(addUser);
};

export const useSignInUser = () => {
  return useMutation(signInUser);
};

export const useGetAllUsers = () => {
  return useQuery("users", getAllUsers);
};
