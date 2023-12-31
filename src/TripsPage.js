import { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion";

const cities = ["Maldives" , "Bali" , "Thailand"] ; 

const trips = {
  Maldives:[
      {
        img:"img/maldives1.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      },
      {
        img:"img/maldives2.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      },
      {
        img:"img/maldives3.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      },
      {
        img:"img/maldives4.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      },
      {
        img:"img/maldives5.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      }
    ],
    Bali:[
      {
        img:"img/bali1.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      },
      {
        img:"img/bali2.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      },
      {
        img:"img/bali3.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      },
      {
        img:"img/bali4.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      },
      {
        img:"img/bali5.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      }
    ],
    Thailand:[
      {
        img:"img/thailand1.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      },
      {
        img:"img/thailand2.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      },
      {
        img:"img/thailand3.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
      },
      {
        img:"img/thailand4.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
    },
    {
        img:"img/thailand5.jpg",
        price : "$1500",
        main_discrption : "Hilton Maldives amingiri resort & spa",
        secondery_discrption : "All inclusive (Meals and transportations)",
        detail : "https://visitmaldives.com/en"
    }
]
}

export default function Trips(){
  return(
    <div className="trips">
      <h1>Trips</h1>
      {
        cities.map((c)=><Swipper city={c} key={c}/>)
      }
    </div>
  );
}

function Swipper({city}){
  const swipperRef = useRef() ; 
  const [width , setWidth] = useState(0) ; 

  useEffect(function(){
    setWidth(swipperRef.current.scrollWidth - swipperRef.current.offsetWidth) ;
  } , []);

  return(
    <motion.div 
    className="swipper"
    ref={swipperRef}
    whileTap={{cursor: "grabbing"}}
    >
      <h2>{city}</h2>
      <motion.div 
      drag="x" 
      dragConstraints={{right:0 , left: -width}}
      className="inner-swipper">
        {
          trips[city]?.map((i)=>(
            <div className="item" key={i.img}>
              <img src={i.img} alt="img" />
              <div>
                <h3>{i.main_discrption}</h3>
                <h3>{i.price}</h3>
              </div>
              <div>
                <p>{i.secondery_discrption}</p>
              </div>
              <a href={i.detail}>More details</a>
            </div>
          ))
        }
      </motion.div>
    </motion.div>
  );
}
