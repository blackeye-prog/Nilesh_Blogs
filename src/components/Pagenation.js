import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

 const Pagenation = () => {

    const {page, handlePageChange, totalPages} = useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center border-2  fixed bottom-0 bg-white '>
        <div className='flex justify-between w-11/12 max-w-[670px] py-[2px]'>
            <div className='flex gap-3'>
            { page>1 &&
                (<button onClick={() => handlePageChange(page-1)} className='rounded-md border-2 px-4 py-1'>
                    Previous
                </button>)
            }
            {page<totalPages &&
                (<button onClick={() => handlePageChange(page+1)} className='rounded-md border-2 px-4 py-1'>
                    next
                </button>)
            }
            </div>
            <p className='font-bold text-sm'>
                    Page {page} of {totalPages}
            </p>
        </div>
    </div>
  )
}

export default Pagenation