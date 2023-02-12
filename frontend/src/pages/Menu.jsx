import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import Footer from '../components/Footer'
import HeadOptionImageBG from '../components/HeadOptionImageBG'
import MenuShowList from '../components/MenuShowList'
import Navbar from '../components/Navbar'

import {RiTimeLine} from 'react-icons/ri'
import {BiDish} from 'react-icons/bi'
import {GiCoffeeCup} from 'react-icons/gi'
import ImageSwiperSlider from '../components/ImageSwiperSlider'

function Menu() {
  const [cookies] = useCookies()
  const [menu, setMenu] = useState(0)
  const menu_list = [
    //Breakfast
    [{name: 'Pancakes and Maple Syrup', description:'', image: '/assets/menu_list/bf1.jpg', price: 12.99}, {name: 'Biscuits and Gravy', description:'', image: '/assets/menu_list/bf2.jpg', price: 4.99}, 
    {name: 'Belgian Style Waffles', description:'', image: '/assets/menu_list/bf3.jpg', price: 9.49}, {name: 'Bacon and Eggs', description:'', image: '/assets/menu_list/bf4.jpg', price: 6.99},
    {name: 'Stuffed Omelet', description:'', image: '/assets/menu_list/bf5.jpg', price: 4.49}, {name: 'Croissants', description:'', image: '/assets/menu_list/bf6.jpg', price: 7.99}],
    
    //Lunch
    [{name: 'Buddha Bowls', description:'', image: '/assets/menu_list/l1.jpg', price: 15.49}, {name: 'Smoked Pork Tacos with Pickled Slaw and Jalapeño Mayo', description:'', image: '/assets/menu_list/l2.jpg', price: 14.99}, 
    {name: 'Carne Asada with Reata Cheese Enchilada', description:'', image: '/assets/menu_list/l3.jpg', price: 17.49}, {name: 'Stacked Chicken Enchiladas with Tomatillo Cream Sauce', description:'', image: '/assets/menu_list/l4.jpg', price: 13.99},
    {name: 'Chef Feature Buffalo Burger', description:'', image: '/assets/menu_list/l5.jpg', price: 15.49}, {name: 'Reatas Club Sandwich with House-Made Chips', description:'', image: '/assets/menu_list/l6.jpg', price: 14.59}],

    //Dinner
    [{name: 'Poached Eggs in Salsa', description:'', image: '/assets/menu_list/d1.jpg', price: 8.99}, {name: 'Sweet Turkey Chili', description:'', image: '/assets/menu_list/d2.jpg', price: 12.49}, 
    {name: 'Ginger Chicken with Rice Noodles', description:'', image: '/assets/menu_list/d3.jpg', price: 9.49}, {name: 'Oyakodon', description:'', image: '/assets/menu_list/d4.jpg', price: 14.51},
    {name: 'Cozi Classic Chicken', description:'', image: '/assets/menu_list/d5.jpg', price: 17.99}, {name: 'Bacon Cheddar Apple Frittata', description:'', image: '/assets/menu_list/d6.jpg', price: 11.49}],

    //Beverages
    [{name: 'Lemon Ice Tea', description:'', image: '/assets/menu_list/bv1.jpg', price: 2.99}, {name: 'Ice Coffee', description:'', image: '/assets/menu_list/bv2.jpg', price: 4.99}, 
    {name: 'Coffee Art Latte', description:'', image: '/assets/menu_list/bv3.jpg', price: 7.99}, {name: 'Ice Chocolate', description:'', image: '/assets/menu_list/bv4.jpg', price: 4.49},
    {name: 'Gingerbread Latte', description:'', image: '/assets/menu_list/bv5.jpg', price: 9.51}, {name: 'Chamomile Ginger Turmeric Tea', description:'', image: '/assets/menu_list/bv6.jpg', price: 8.49}],
  ]

  const handleChange = (e) => {
    setMenu(e)
    console.log(menu);
  }
  return (
    <div className=''>
      <Navbar auth={cookies.auth_token === undefined ?true:false}/>
      <div className='flex flex-col items-center my-4  '>
        <h2 className='text-5xl text-amber-500 font-unbounded'>MENU LIST</h2>
        {/* <p className='text-center text-xs my-2 font-medium text-neutral-500 w-[30%]'>This is the menu part of Mikoto MERN Restaurant. Here you will find almost all the menu that we served but not include our day's special meals. All the meals we served is using the best ingredients and cooked by the most professional adn the best chef so it is guaranteed that the meals you eat will taste good. P.S. Our restaurant do not responsible if you are addicted to our meals</p> */}
        <ImageSwiperSlider className={'h-[21rem] mt-7 rounded-3xl bg-slate-200 w-[35rem]'} images={['/assets/menu_list/bf6.jpg', '/assets/menu_list/bf1.jpg', '/assets/menu_list/d3.jpg', '/assets/menu_list/d4.jpg', '/assets/menu_list/bv4.jpg', '/assets/menu_list/bv6.jpg']} />
        <div className=' gap-x-16 flex justify-between w-[60%] mb-7 mt-[4rem]'>
          <div className='flex flex-col items-center'>
            <RiTimeLine className='w-11 h-11 text-amber-500' />
            <h4 className='text-neutral-900 font-medium font-poppins text-lg'>Fast Serve</h4>
            <p className='text-neutral-500 font-normal text-xs text-center'>We are trying to give the fastest possible to serve our food to our customer but still mantain best cooked level of our food</p>
          </div>
          <div className='flex flex-col items-center'>
            <BiDish className='w-11 h-11 text-amber-500' />
            <h4 className='text-neutral-900 font-medium font-poppins text-lg'>Best Taste</h4>
            <p className='text-neutral-500 font-normal text-xs text-center'>We are very well known for the taste of our meals and in Mikoto MERN Restaurant it is guaranteed that you feel the best cook in town</p>
          </div>
          <div className='flex flex-col items-center'>
            <GiCoffeeCup className='w-11 h-11 text-amber-500' />
            <h4 className='text-neutral-900 font-medium font-poppins text-lg'>Convenient Place</h4>
            <p className='text-neutral-500 font-normal text-xs text-center'>We are designed our room and place to be convenient as hard as possible so customer can focusing on the taste of the food</p>
          </div>
        </div>
      </div>
      <HeadOptionImageBG onChange={handleChange} className="my-7" header={[ 
        {tittle: 'Breakfast', name: 'breakfast', bg: '/assets/restaurant1.jpg' }, 
        {tittle: 'Lunch', name: 'lunch', bg: '/assets/restaurant2.jpg' }, 
        {tittle: 'Dinner', name: 'dinner', bg: '/assets/restaurant3.jpg' },
        {tittle: 'Beverage', name: 'beverage', bg: '/assets/restaurant4.jpg' }
      ]}/>
      <MenuShowList menu_list={menu_list[menu]} />
      <Footer />
    </div>
  )
}

export default Menu