import { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Assuming you're using a service to fetch data

const Search = () => {
  const [username, setUsername] = useState("");  // State for storing the username input
  const [user, setUser] = useState(null);         // State for storing user data
  const [loading, setLoading] = useState(false);  // State for handling loading status
  const [error, setError] = useState(false);     // State for handling errors

  const handleSubmit = async (e) => {
    e.preventDefault();   // Prevent form submission reload
    if (username.trim()) {  // If there's input
      setLoading(true);    // Set loading state to true
      setError(false);     // Reset error state
      try {
        const data = await fetchUserData(username);  // Fetch user data from GitHub API
        if (data) {
          setUser(data);      // Set user data if found
        } else {
          setError(true);     // If no user found, set error state
          setUser(null);       // Clear user data
        }
      } catch (err) {
        setError(true);     // Set error state in case of an API error
        setUser(null);       // Clear any user data
      } finally {
        setLoading(false);  // Set loading state to false once done
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}  // Update username on input change
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {/* Display loading message */}
      {loading && <p>Loading...</p>}

      {/* Display error message if the user cannot be found */}
      {error && <p>Looks like we can't find the user</p>}  {/* Error message here */}

      {/* Display user data if found */}
      {user && (
        <div className="mt-4 p-4 border rounded">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <h2 className="text-xl font-semibold">{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;



