import React from 'react';



const Pagination = ({postPerPage,totalposts,paginate,currentPage,setcurrentPage}) => {

    const pagenumber = []

    for (let i = 1; i <= Math.ceil(totalposts / postPerPage); i++) {

        pagenumber.push(i)
        
    }


    return (

    
           <div className='w-full h-20   flex justify-center items-center  mt-6'>
                   <div className='w-1/2 h-1/2 bg-white flex ml-10'>

                       {currentPage !=1 ?
                       <div onClick={()=>setcurrentPage(currentPage-1)} className={` w-10 h-10  mr-2 text-center flex justify-center items-center  text-blue-500 border-blue-700  rounded-md cursor-pointer `}>
                             prevus

                       </div>

                      :null}
                     
                     {pagenumber.map((number,index)=>(

                     <div key={index} onClick={()=>paginate(number)} className={` w-10 h-10  mr-1 text-center flex justify-center items-center  text-blue-500 border-blue-500 border-2 rounded-md cursor-pointer ${pagenumber[index] == currentPage && 'bg-blue-200 text-white'}`}>
                             {number}

                     </div>
                     ))
                     }

                     {currentPage < pagenumber.length ?
                       <div onClick={()=>setcurrentPage(currentPage+1)} className={` w-10 h-10  mr-2 text-center flex justify-center items-center  text-blue-500 border-blue-700  rounded-md cursor-pointer `}>
                             next

                       </div>

                      :null}
                      
                    

                   </div>

            </div>
    );
}





export default Pagination;
