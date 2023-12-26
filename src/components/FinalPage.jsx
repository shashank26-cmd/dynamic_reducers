// FinalPage.js

import { useContext } from "react";
import userContext from "../context/userContext";


const FinalPage = () => {
  const { state } = useContext(userContext);
  const percentage = ((state.fields.filter((field) => field.value.trim() !== '').length / state.fields.length) * 100).toFixed(2);

  return (
    <div>
      <h2>Final Page</h2>
      <p>Form submitted successfully!</p>
      <p>Total Percentage of filled fields: {percentage}%</p>
    </div>
  );
};

export default FinalPage;
