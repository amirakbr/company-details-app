function LeftSide({companylist , HandleEdit}) {
     let listShow = companylist.map((index)=>
          <tr id={companylist.indexOf(index)} className="border-t-2 border-b-2">
               <td className="py-3 px-6 text-[1.04rem] font-semibold text-primary truncate max-w-[3rem]" title={'Company Name : ' + " " + index.Name} > {index.Name} </td>
               <td className="py-3 px-2 pr-6 text-[1.04rem] font-semibold text-primary truncate max-w-[3.5rem]" title={'Company Name : ' + " " + index.State}> {index.State} </td>
               <td className="py-3 px-2 text-[1.04rem] font-semibold text-primary truncate max-w-[2rem]" title={'Company Employee : ' + " " + index.Employee}> {index.Employee} </td>
               <td className="flex gap-6 items-center justify-end mt-[0.025rem] px-2 py-3 pr-8 w-[9rem]"> 
                    <div onClick={(event) => HandleEdit(event.target.parentElement.parentElement)}>
                         <svg className="relative z-[-1]" width="24" height="24" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.2802 2.92206L16.2556 6.09377C16.3809 6.22739 16.3809 6.4454 16.2556 6.57902L9.05139 14.2586L5.99028 14.6208C5.58125 14.6701 5.2349 14.3008 5.28108 13.8648L5.62083 10.6017L12.825 2.92206C12.9503 2.78844 13.1549 2.78844 13.2802 2.92206ZM18.624 2.11682L17.0142 0.40086C16.5128 -0.13362 15.6981 -0.13362 15.1934 0.40086L14.0257 1.64563C13.9003 1.77925 13.9003 1.99727 14.0257 2.13089L17.001 5.3026C17.1264 5.43622 17.3309 5.43622 17.4563 5.3026L18.624 4.05782C19.1253 3.51983 19.1253 2.6513 18.624 2.11682ZM12.6667 12.17V15.7496H2.11111V4.49736H9.69132C9.79688 4.49736 9.89583 4.45165 9.9717 4.37429L11.2911 2.96777C11.5418 2.70053 11.3637 2.24692 11.0108 2.24692H1.58333C0.709201 2.24692 0 3.00293 0 3.93475V16.3122C0 17.244 0.709201 18 1.58333 18H13.1944C14.0686 18 14.7778 17.244 14.7778 16.3122V10.7634C14.7778 10.3872 14.3523 10.2008 14.1016 10.4645L12.7821 11.8711C12.7095 11.9519 12.6667 12.0574 12.6667 12.17Z" fill="#20486A"/>
                         </svg>
                    </div>
                    <div>
                         <svg width="20" height="20" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.4643 1.06251H10.4464L10.1317 0.441607C10.065 0.308866 9.96233 0.197207 9.83515 0.119191C9.70798 0.0411758 9.56137 -0.000100538 9.41183 5.82141e-06H5.58482C5.43562 -0.000562966 5.28927 0.0405594 5.16255 0.118662C5.03582 0.196764 4.93385 0.308687 4.8683 0.441607L4.55357 1.06251H0.535714C0.393634 1.06251 0.257373 1.11848 0.156907 1.2181C0.0564412 1.31773 0 1.45286 0 1.59376L0 2.65626C0 2.79715 0.0564412 2.93228 0.156907 3.03191C0.257373 3.13153 0.393634 3.1875 0.535714 3.1875H14.4643C14.6064 3.1875 14.7426 3.13153 14.8431 3.03191C14.9436 2.93228 15 2.79715 15 2.65626V1.59376C15 1.45286 14.9436 1.31773 14.8431 1.2181C14.7426 1.11848 14.6064 1.06251 14.4643 1.06251ZM1.78125 15.5059C1.8068 15.9105 1.98688 16.2902 2.28484 16.5678C2.5828 16.8454 2.97623 16.9999 3.38504 17H11.615C12.0238 16.9999 12.4172 16.8454 12.7152 16.5678C13.0131 16.2902 13.1932 15.9105 13.2187 15.5059L13.9286 4.25H1.07143L1.78125 15.5059Z" fill="#20486A"/>
                         </svg>
                    </div>
               </td> 
          </tr>
     ) ; 
     return (
          <div className="flex flex-col gap-8 p-4">
               <div className="flex flex-col gap-1 p-4 bg-gray-200">
                    <h1 className="text-primary text-2xl font-bold">
                         Company Directory
                    </h1>
                    <p className="text-secondary text-lg font-medium">
                         Here You Can Manage Your Company 
                         And See Details
                    </p>
               </div>
               <table className="border-collapse border-2">
                    <thead className="bg-gray-100 border-t-2 border-b-2">
                         <tr>
                              <td className="py-2 px-2 pl-6 text-[1.08rem] font-semibold text-secondary truncate max-w-[3rem]">NAME</td>
                              <td className="py-2 px-2 text-[1.08rem] font-semibold text-secondary truncate max-w-[3.5rem]">STATE</td>
                              <td className="py-2 px-2 text-[1.08rem] font-semibold text-secondary w-[8rem]">EMPLOYEES</td>
                              <td className="py-2 px-2 pr-6 text-[1.08rem] font-semibold text-secondary w-[9rem]"></td>
                         </tr>
                    </thead>
                    <tbody>
                         {listShow}
                    </tbody>
               </table>
          </div>
     )
}
export default LeftSide ; 