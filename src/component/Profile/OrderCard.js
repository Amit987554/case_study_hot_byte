import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16'
                src='https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg' 
                alt='product'/>
            <div>
                <p>Burger</p>
                <p>₹399</p>
            </div>
        </div>
        <div>
            <Button className='cursor-not-allowed'>Completed</Button>
        </div>
    </Card>
      
    
  )
}

export default OrderCard
