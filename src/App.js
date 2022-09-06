import SearchBlock from "./SearchBlock";
import LeftSide from "./LeftSide/LeftSide" ; 
import { useState } from "react";
function App() {
  const [companyName, setCompanyName] = useState('') ; 
  const [companyLoc, setCompanyLoc] = useState('') ; 
  const [companyEmployee , setCompanyEmployee] = useState('') ; 
  const [companylist , setCompanyList] = useState([]) ; 
  const [onStageEdit , setOnStageEdit] = useState() ; 
  
  
  const [ErrorCatcher , setErrorCatcher] = useState() ; 
  function handleInputs() {
    if(companyName.length >=1 && companyLoc.length >=1 
      && companyEmployee.length >=1 ) {
        setCompanyList([...companylist , {
          Name : companyName , 
          State : companyLoc , 
          Employee : companyEmployee , 
        }]) 
        setCompanyName('') ; 
        setCompanyLoc('') ; 
        setCompanyEmployee('') ; 
      }
  }
  function handleEdit(a) {
    setOnStageEdit(a) ; 
    setCompanyName(companylist[a].Name) ; 
    setCompanyLoc(companylist[a].State) ; 
    setCompanyEmployee(companylist[a].Employee) ; 
  }
  function confirmEdites(a) {
      companylist[a] = {
        Name : companyName , 
        State : companyLoc , 
        Employee : companyEmployee ,  
      }
      setCompanyName('') ; 
      setCompanyLoc('') ; 
      setCompanyEmployee('') ; 
      setOnStageEdit() ; 
  }
  function handleDelete(a){
    const newCompanyList = [...companylist] ; 
    newCompanyList.splice(Number(a.id) , 1) ; 
    setCompanyList([...newCompanyList]) ; 
    setCompanyName('') ; 
    setCompanyLoc('') ; 
    setCompanyEmployee('') ; 
  }
  return (
    <div className="min-h-screen grid grid-cols-[1fr] lg:grid-cols-[1fr_2fr] gap-[2rem] p-[2%] bg-[#F8F9FD] ">
      <SearchBlock 
          setCompanyName = {setCompanyName}
          setCompanyLoc = {setCompanyLoc}
          setCompanyEmployee = {setCompanyEmployee}
          companyName = {companyName}
          companyLoc = {companyLoc}
          companyEmployee = {companyEmployee}
          handleInputs = {handleInputs}
          companylist = {companylist}
          onStageEdit = {onStageEdit}
          confirmEdites = {confirmEdites}
          setErrorCatcher = {setErrorCatcher}
          />
      <LeftSide 
          companylist = {companylist}
          handleEdit = {handleEdit}
          handleDelete = {handleDelete}
          onStageEdit = {onStageEdit}
             />
    </div>
  );
}

export default App;
