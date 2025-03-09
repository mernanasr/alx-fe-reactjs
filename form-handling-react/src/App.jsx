import { useState } from "react";
import FormikForm from "./components/FormikForm.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Form Handling with Formik</h1>
      
      {/* Counter Section (Optional, Can Be Removed If Not Needed) */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Formik-based Form Component */}
      <h2>User Registration (Formik)</h2>
      <FormikForm />
    </>
  );
}

export default App;

