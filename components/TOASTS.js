import React from "react";
import toast, { Toaster } from "react-hot-toast";

export const ToastNotif = (message, type, func = null, errorMessage = "") => {
  switch (type) {
    case "success":
      toast.success(message, {
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
          height: "auto",
          width: "200px",
        },
      });
      break;
    case "error":
      toast.error(message, {
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
          height: "auto",
          width: "200px",
        },
      });
      break;
    case "promise":
      if (typeof func === "function") {
        toast.promise(
          func(),
          {
            loading: "loading...",
            success: <b>{message}</b>,
            error: <b>{errorMessage}</b>,
          },
          {
            style: {
              borderRadius: "10px",
              background: "#fff",
              color: "#333",
              height: "auto",
              width: "250px",
            },
          }
        );
      } else {
        console.error("func is not a function");
      }
      break;
    default:
      toast(message, {
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
          height: "50px",
          width: "100px",
        },
      });
      break;
  }
};

const ToastNotification = ({ position }) => {
  return (
    <div>
      <Toaster position={position} />
    </div>
  );
};

export default ToastNotification;
