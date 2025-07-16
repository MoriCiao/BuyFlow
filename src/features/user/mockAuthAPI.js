import { users } from "./mockusersDB";

export const mockLoginAPI = ({ email, password }) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const found = users.find(
        (u) => u.email === email && u.password === password
      );
      if (found) {
        const { password, ...userData } = found; // 不回傳用戶端的password
        res({ ...userData, token: "fakeToken_" + Date.now() });
      } else {
        rej("無此帳戶...");
      }
    }, 600);
  });
};
