function SearchBlock ({setCompanyName , setCompanyLoc , setCompanyEmployee , companyName , companyLoc , companyEmployee , HandleInputs , companylist , onStageEdit , ConfirmEdites}) {
     const inputsEntries = [
          {
               key : 'input1' , 
               title : 'Company name:' , 
               placeholder : 'e.g Netflix, Inc' , 
               type : setCompanyName ,
               value : companyName , 
               validation : () => (event) => {if (!/[aA-zZ , " " , 0-9]/.test(event.key)) {event.preventDefault();}}
          },
          {
               key : 'input2' , 
               title : 'Company state:' , 
               placeholder : 'e.g Florida' , 
               type : setCompanyLoc , 
               value : companyLoc , 
               validation : () => (event) => {if (!/[aA-zZ , " " , 0-9]/.test(event.key)) {event.preventDefault();}}
          },
          {
               key : 'input3' , 
               title : 'Company employeed:' , 
               placeholder : 'e.g 20,345' , 
               type : setCompanyEmployee , 
               value : companyEmployee , 
               validation : () => (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}
          }
     ]
     const inputsEntriesShow = [] ; 
     inputsEntries.forEach((index) => {
          inputsEntriesShow.push(
               <label className="flex flex-col gap-2 text-primary text-lg font-semibold " key={index.key} >
                    {index.title}
                    <input type='text' onChange={(e) => {index.type(e.target.value)}} onKeyPress={index.validation()} value={index.value} placeholder={index.placeholder} className="border-2 p-2 rounded-lg text-base font-medium text-secondary placeholder:text-secondary " />
               </label>
          )
     })
     return (
          <div className="flex flex-col gap-8 p-4">
               <div className="flex flex-col gap-1 p-4 bg-gray-200">
                    <h1 className="text-primary text-2xl font-bold">
                         Add New Item
                    </h1>
                    <p className="text-secondary text-lg font-medium">
                         Manage Your Company
                    </p>
               </div>
               <div className="search--form p-4">
                    <form onSubmit={(event) => {event.preventDefault()}} className="flex flex-col gap-4">
                         {inputsEntriesShow}
                         <button onClick={() => {Number(onStageEdit) >= 0 ? ConfirmEdites(Number(onStageEdit)) : HandleInputs()}} type="submit" className="text-white bg-primary w-full p-2 rounded-lg " >
                              Sumbit
                         </button>
                    </form>
               </div>
          </div>    
     )
}
export default SearchBlock ;