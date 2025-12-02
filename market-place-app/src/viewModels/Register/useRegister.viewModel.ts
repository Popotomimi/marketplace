import { useState } from "react";

export const useRegisterViewModel = () => {
  const [userData, setUserData] = useState({
    name: "Roberto",
    token: "sdfasfsaas23664",
  });

  return { userData, setUserData };
};
