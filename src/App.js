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
  function HandleDelete(a){
    companylist.splice(Number(a.id) , 1) ; 
    setCompanyList([...companylist]) ; 
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
          HandleInputs = {HandleInputs}
          companylist = {companylist}
          onStageEdit = {onStageEdit}
          ConfirmEdites = {ConfirmEdites}
          setErrorCatcher = {setErrorCatcher}
          />
      <LeftSide 
          companylist = {companylist}
          HandleEdit = {HandleEdit}
          HandleDelete = {HandleDelete}
          onStageEdit = {onStageEdit}
             />
    </div>
  );
}

export default App;
