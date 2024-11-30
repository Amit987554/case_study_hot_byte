import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
        <CardMedia 

        sx={{height:345}}
        image='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <CardContent>
            <Typography variant='h5'>
                Great Indian Foodie Bros
            </Typography>
            <Typography variant='body2'>
                50% off on your First Order
            </Typography>
            <div className='py-2 space-y-2'>
                <p>{"Noida"}</p>
                <p className='text-sm text-blue-500'>December 8, 2024 12:00 AM </p>
                <p className='text-sm text-red-500'>December 9, 2024 12:00 AM</p>

            </div>
        </CardContent>

       { false && <CardActions>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </CardActions>}
      </Card>
    </div>
  )
}


