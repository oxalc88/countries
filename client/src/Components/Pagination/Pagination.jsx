import React from 'react';
//import { useState, useEffect } from 'react';
//import './pagination.module.css'

// export const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {

//     const [pages] = useState(Math.round(data.length / dataLimit));
//     const [currentPage, setCurrentPage] = useState(1);

//     const goToNextPage = () => {
//         setCurrentPage(page => page + 1)
//     }

//     const goToPreviousPage = () => {
//         setCurrentPage(page => page - 1)
//     }

//     const changePage = (event) => {
//         const pageNumber = Number(event.target.textContent);
//         setCurrentPage(pageNumber);
//     }

//     const getPaginatedData = () => {
//         const startIndex = currentPage * dataLimit - dataLimit;
//         const endIndex = startIndex + dataLimit;
//         return data.slice(startIndex, endIndex);
//     };

//     const getPaginationGroup = () => {
//         let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
//         return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
//     };

//     useEffect(() => {
//         window.scrollTo({ behavior: 'smooth', top: '0px' });
//     }, [currentPage])


//     return (
//         <>



//             {/* {getPaginatedData().map((d, idx) => (
//                     <RenderComponent key={idx} data={d}
//                     />
//                 ))} */}
//             {getPaginatedData().map((country) => (
//                 <RenderComponent name={country.name} continent={country.continent} key={country.id} capital={country.capital} flag={country.flag}
//                 />
//             ))}
//             <div className="Pagination">
//                 <button
//                     onClick={goToPreviousPage}
//                     className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
//                 >
//                     prev
//                 </button>

//                 {getPaginationGroup().map((item, index) => (
//                     <button
//                         key={index}
//                         onClick={changePage}
//                         className={`PaginationItem ${currentPage === item ? 'active' : null}`}
//                     >
//                         <span>{item}</span>
//                     </button>
//                 ))}

//                 <button
//                     onClick={goToNextPage}
//                     className={`next ${currentPage === pages ? 'disabled' : ''}`}
//                 >
//                     next
//                 </button>

//             </div>





//         </>
//     )
// }

export const Pagination = ({ nextpage, prevPage }) => {
    return (
        <div>
            <button onClick={prevPage}>
                Anteriores
            </button>
            & nsbp
            <button onClick={nextpage}
            >
                Siguientes
            </button>
        </div >)
}