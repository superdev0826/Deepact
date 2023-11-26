import api from "../utils/api";

// Login User by Email
export const LoginByEmail = async (login: string, password: string) => {
  try {
    const res = await api.post(
      "/signin",
      {
        login,
        password,
      },
      { withCredentials: true }
    );
    console.log(res);
    return res;
  } catch (err: any) {
    const errors = err;
    return errors;
  }
};

// Login User By Wallet
export const LoginByWallet = async (walletAddress: any) => {
  try {
    const res = await api.post(
      "/signinwalet",
      {
        walletAddress,
      },
      { withCredentials: true }
    );
    return res;
  } catch (err: any) {
    const errors = err;
    return errors;
  }
};

// Register User By Email
export const RegisterByEmail = async (login: string, password: string) => {
  try {
    const res = await api.post("/signup", {
      login,
      password,
    });
    if (res.data.message == "User has been created") {
      return LoginByEmail(login, password);
    }
  } catch (err: any) {
    // const errors = err.response.data.errors;
  }
};

// Register User By Wallet
export const RegisterByWallet = async (walletAddress: any) => {
  try {
    console.log(walletAddress, "asd");
    const res = await api.post("/signupwalet", {
      walletAddress,
    });
    if (res.data.message == "User has been created") {
      return LoginByWallet(walletAddress);
    }
  } catch (err: any) {
    // const errors = err.response.data.errors;
  }
};

// Connect Twitter
export const ConnectTwitter = async () => {
  try {
    const res = await api.get("/gettwiterlink");
    return res;
  } catch (error: any) {}
};
