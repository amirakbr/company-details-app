function SearchBlock ({setCompanyName , setCompanyLoc , setCompanyEmployee , companyName , companyLoc , companyEmployee , HandleInputs , companylist , onStageEdit , ConfirmEdites
, setErrorCatcher}) {
     const inputsEntries = [
          {
               title : 'Company name:' , 
               placeholder : 'e.g Netflix, Inc' , 
               setter : setCompanyName ,
               value : companyName , 
               validation : () => (event) => {if (!/[aA-zZ , " " , 0-9]/.test(event.key)) {event.preventDefault();}} , 
               type : 'text'
          },
          {
               title : 'Company state:' , 
               placeholder : 'e.g Florida' , 
               setter : setCompanyLoc , 
               value : companyLoc , 
               validation : () => (event) => {if (!/[aA-zZ , " " , 0-9]/.test(event.key)) {event.preventDefault();}} , 
               type : 'text'
          },
          {
               title : 'Company employeed:' , 
               placeholder : 'e.g 20,345' , 
               setter : setCompanyEmployee , 
               value : companyEmployee , 
               validation : () => (event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}} ,
               type : 'number'
          }
     ]
     return (
          <div className="flex flex-col gap-8 bg-white py-4 rounded-lg ">
               <div className="flex flex-col gap-1
               text-center md:text-left p-4">
                    <h1 className="text-primary text-2xl font-bold">
                         Add New Item
                    </h1>
                    <p className="text-secondary text-lg font-medium">
                         Manage Your Company
                    </p>
               </div>
               <div className="search--form p-4 sticky top-[0px]">
                    <form onSubmit={(event) => {event.preventDefault()}} 
                          onKeyPress={(event) => {
                              event.key === "Enter" &&
                              Number(onStageEdit) >= 0 ?
                              ConfirmEdites(Number(onStageEdit)) :
                              event.key === "Enter" &&
                              !(Number(onStageEdit) >= 0) ?
                              HandleInputs() :
                              setErrorCatcher(0)
                          }}
                    className="flex flex-col gap-4">
                         {inputsEntries.map((index , id) => 
                                   <label className="flex flex-col gap-2 text-primary text-lg font-semibold " key={id} >
                                        {index.title}
                                        <input type={index.type} onChange={(e) => {index.setter(e.target.value)}} onKeyPress={index.validation()} value={index.value} placeholder={index.placeholder} className="border-[.15rem solid #ccd0d9] p-2 rounded-lg text-base font-medium text-secondary placeholder:text-secondary" style={{border : Number(onStageEdit) >= 0 ? '.15rem solid #20486A' : '.15rem solid #ccd0d9' }} />
                                   </label>
                              )}
                         <button onClick={() => {Number(onStageEdit) >= 0 ? ConfirmEdites(Number(onStageEdit)) : HandleInputs()}} type="submit" className="text-white text-lg font-semibold bg-primary w-full p-2 rounded-lg hover:bg-[#3d79a1]" >
                              Sumbit
                         </button>
                    </form>
               </div>
          </div>    
     )
}
export default SearchBlock ;