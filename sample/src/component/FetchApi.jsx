import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users/1";

/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/

export const FetchApi = () => {
  const [userData, setUserData] = useState({}); // {}  -> important

  const getUserData = async () => {
    const res = await fetch(url);
    console.log("response is", res);
    const jsonData = await res.json();
    console.log("data is", jsonData);
    setUserData(jsonData);
  };

  useEffect(() => {
    getUserData();
  }, []); /// set dependency array -[]- is important

  return (
    <div>
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong>
        {userData.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p>
    </div>
  );
};
