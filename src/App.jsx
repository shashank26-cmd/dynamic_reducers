
import { useReducer } from "react"
import DynamicForm from "./components/dynamic"
import userContext from "./context/userContext"
import formReducer from "./reducer/userreducer"
function App() {


  const initialState = {
    fields: [
      { id: 'name', label: 'Name', value: '' },
      { id: 'email', label: 'Email', value: '' },
      { id: 'address', label: 'Address', value: '' },
      { id: 'phone', label: 'Phone', value: '' },
    ],
    currentPage: 1,
  };


  const[state,dispatch]=useReducer(formReducer,initialState  )
  return (
    <userContext.Provider value={{state,dispatch}}>
      <DynamicForm />
    </userContext.Provider>
  )
  }

export default App
