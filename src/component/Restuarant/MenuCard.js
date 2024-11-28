import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'


const demo = [
  {
    category:"Nuts and Seeds",
    ingredients:["Cashews"]
  },
  {
    category:"Protein",
    ingredients:["Chicken","Salmon"]
  }
]

const MenuCard = () => {
  const handleCheckBoxChange = (value)=>{
    console.log("value")
  }
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <div className='lg:flex items-center justify-between'>
        <div className='lg:flex items-center lg:gap-5'>
        <img className='w-[7rem] h-[7rem] object-cover' 
        src='https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg' alt=''/>
        <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
          <p className='font-semibold text-xl'>Burger</p>
          <p>₹499</p>
          <p className='text-gray-400'>Nice Burger with crispy aloo tikki</p>
        </div>
        </div>
      </div>
    </AccordionSummary>
    <AccordionDetails>
      <form>
        <div className='flex gap-5 flex-wrap'>
          {
            demo.map((item)=>
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredients.map((item)=>(<FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item} />))}
                </FormGroup>
              </div>
            )
          }
        </div>
        <div className='pt-5'>
          <Button type='submit' variant='contained' disabled = {false}>{true?"Add to cart":"Out of Stock"}</Button>
        </div>
      </form>
    </AccordionDetails>
  </Accordion>
  )
}

export default MenuCard
