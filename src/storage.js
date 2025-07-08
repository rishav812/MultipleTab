import SecureLs from "secure-ls";

const ls = new SecureLs({ encodingType: "aes" });

export const storage = {
  set: (key, data) => {
    try {
      ls.set(key, data);
    } catch (err) {
      console.log("err:", err);
    }
  },

  get: (key) => {
    try {
      const data = ls.get(key);
      return data;
    } catch (err) {
      console.log("err:", err);
    }
  },

  clear: () => {
    try {
      ls.clear();
    } catch (err) {
      console.log("err:", err);
    }
  },
};
