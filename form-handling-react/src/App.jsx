import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm.jsx";
import "./App.css";

function App() {
  const [showForms, setShowForms] = useState(true);

  return (
    <div className="app-container">
      <h1>React Form Handling</h1>

      <button onClick={() => setShowForms(!showForms)}>
        {showForms ? "Hide Forms" : "Show Forms"}
      </button>

      {showForms && (
        <>
          <section>
            <h2>Controlled Component Form</h2>
            <RegistrationForm />
          </section>

          <section>
            <h2>Formik-based Form</h2>
            <FormikForm />
          </section>
        </>
      )}
    </div>
  );
}

export default App;


