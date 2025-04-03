import { useState } from "react";
import { fetchUserData } from "../services/githubService";  

const Search = () => {
  const [username, setUsername] = useState("");  
  const [user, setUser] = useState(null);         
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(false);     

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      setLoading(true);      
      setError(false);       
      try {
        const data = await fetchUserData(username);  
        setUser(data);        
      } catch (err) {
        setError(true);       
        setUser(null);         
      } finally {
        setLoading(false);
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
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      
      {loading && <p>Loading...</p>}

      
      {error && <p>Looks like we can't find the user</p>}

      
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

