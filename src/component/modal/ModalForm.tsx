import React from 'react'



const ModalForm = () => {
  return (
    <div className='col-span-3 w-full h-auto rounded-xl lg:p-4'>
        {/* Form for new transaction */}
         <form className='text-zinc-50 text-lg '> 
           
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col '>

            <label className='uppercase text-sm py-4'>Vendor  
<input 
className='border-2 rounded-lg p-3 flex border-blue-300'
/>
</label>
</div>
<div className='flex flex-col'>
<label className='uppercase text-sm py-4'>Charge
<input 
className='border-2 rounded-lg p-3 flex border-blue-300'type='text'
/>
</label>
</div>
<div className='flex flex-col px-4'>
<button>  
  {/* </button> */}
  {/* Dropdown Menu Button*/}     
<div className=""
        >Debit or Credit 
</div>
{/* Dropdown Menu End*/}
{/*  Dropdown menu Start  */}
  
{/*  Dropdown menu End  */}    
</button>
        </div>
        </div>
      </form> 
    </div>
  )
}

export default ModalForm