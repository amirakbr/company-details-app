import SearchBlock from "./SearchBlock";
import LeftSide from "./LeftSide/LeftSide" ; 
import { useState } from "react";
function App() {
  const [companyName, setCompanyName] = useState('') ; 
  const [companyLoc, setCompanyLoc] = useState('') ; 
  const [companyEmployee , setCompanyEmployee] = useState('') ; 
  const [companylist , setCompanyList] = useState([]) ; 
  const [onStageEdit , setOnStageEdit] = useState() ; 
  function HandleInputs() {
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
  function HandleEdit(a) {
    setOnStageEdit(a.id) ; 
    setCompanyName(a.children[0].innerText) ; 
    setCompanyLoc(a.children[1].innerText) ; 
    setCompanyEmployee(a.children[2].innerText) ; 
  }
  function ConfirmEdites(a) {
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
  return (
    <div className="min-h-screen grid grid-cols-[1fr_2.5fr]">
      <SearchBlock 
          setCompanyName = {setCompanyName}
          setCompanyLoc = {setCompanyLoc}
          setCompanyEmployee = {setCompanyEmployee}
          companyName = {companyName}
          companyLoc = {companyLoc}
          companyEmployee = {companyEmployee}
          HandleInputs = {HandleInputs}
          companylist = {companylist}
          onStageEdit = {onStageEdit}
          ConfirmEdites = {ConfirmEdites}
          />
      <LeftSide 
          companylist ={companylist}
          HandleEdit={HandleEdit}
             />
    </div>
  );
}

export default App;
