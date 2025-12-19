import { useState, useEffect } from "react";

export function UserList() {
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
      {user && <p>User: {user.location.name}</p>}
    </div>
  );
}





export function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.example.com/user")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <h1>{user.location.name}</h1>;
}

export function SearchUser() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.example.com/users/${username}`
      );

      if (!res.ok) {
        throw new Error("User not found");
      }

      const data = await res.json();
      setUser(data);
    } catch {
      setError("User not found");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p role="alert">{error}</p>}
      {user && <h2>{user.location.name}</h2>}
    </div>
  );
}

export function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) return;

    let isMounted = true;
    setLoading(true);
    setError("");

    fetch(`https://api.example.com/users/${userId}/posts`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setPosts(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError("Could not load posts");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [userId]);

  if (!userId) return <p>Select a user</p>;
  if (loading) return <p>Loading posts...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.location.name}</li>
      ))}
    </ul>
  );
}
