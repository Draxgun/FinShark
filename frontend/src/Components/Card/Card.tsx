import React from 'react'
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card : React.FC<Props> = ({companyName,ticker,price}: Props) : JSX.Element => {
  return (
  <div className='card'>
    <img
        src ='https://img.freepik.com/free-photo/front-view-funny-cute-dog-concept_23-2148786532.jpg?size=626&ext=jpg&ga=GA1.1.1937479475.1700193400&semt=sph'
        alt = "Image"
    />
    <div className='details'>
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
    </div>

    <p className='info'>Lorem ipsum dolor, sit amet 
    consectetur adipisicing elit. Libero, doloremque.
    </p>

    </div>
  )
}

export default Card;