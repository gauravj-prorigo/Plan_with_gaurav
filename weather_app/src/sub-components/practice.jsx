import { useState } from "react";
import { HiH1 } from "react-icons/hi2";

function UserList() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const loadUser = async () => {
    setLoading(true);
    const res = await fetch("/api/user");
    const data = await res.json();
    setUser(data);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={loadUser}>Load User</button>
      {loading && <p>Loading...</p>}
      {user && <p>User: {user.name}</p>}
    </div>
  );
}

export default UserList;
