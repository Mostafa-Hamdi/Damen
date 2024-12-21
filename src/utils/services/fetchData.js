import { dummyData } from "./dummyData";

// Simulate an API call to fetch users
export const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData.users);
    }, 2000);
  });
};

// Simulate an API call to fetch blogs
export const fetchBlogs = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData.blogs);
    }, 2000);
  });
};
