// DynamicForm.js
import Page1 from "./Page1";
import Page2 from "./Page2";
import FinalPage from "./FinalPage";
import { useContext } from "react";
import userContext from "../context/userContext";


const DynamicForm = () => {
  const { state } = useContext(userContext);
  const percentage = ((state.fields.filter((field) => field.value.trim() !== '').length / state.fields.length) * 100).toFixed(2);

  return (
    <div>
      <div>
        <h3>Total Percentage: {percentage}%</h3>
      </div>
      {state.currentPage === 1 && <Page1 />}
      {state.currentPage === 2 && <Page2 />}
      {state.currentPage === 3 && <FinalPage />}
    </div>
  );
};

export default DynamicForm;
