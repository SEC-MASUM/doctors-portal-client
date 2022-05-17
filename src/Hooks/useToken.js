import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      const url = `https://doctors-portal-02.herokuapp.com/user/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
          console.log("data inside useToken", data);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
