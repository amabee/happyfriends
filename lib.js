import axios from "axios";
import { ToastNotif } from "./components/TOASTS";
import { AUTH_ENDPOINT } from "./globals/endpoints";

export async function login(username, password) {
  try {
    const res = await axios.get(AUTH_ENDPOINT, {
      params: {
        operation: "login",
        json: JSON.stringify({
          username: username,
          password: password,
        }),
      },
    });

    if (res.status === 200) {
      if (res.data !== null && res.data.success) {
      } else {
        ToastNotif(JSON.parse(res.data), "error");
      }
    } else {
      ToastNotif(res.statusText, "error");
    }
  } catch (error) {
    alert(error);
  }
}
