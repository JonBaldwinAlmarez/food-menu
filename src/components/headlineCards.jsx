import React from 'react';

const HeadlineCards = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*Cards 1*/}
        <div className=' rounded-xl relative'>
        {/*Overlay*/}
            <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' text-2xl px-2 pt-4 font-bold'>Lorem ipsum</p>
                <p className=' p-2'>Proin ut tincidunt sapien. risus</p>
                <button className=' bg-white/80 text-black mx-2 mt-28 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__480.jpg" alt='Fruits'/>
        </div>

        {/*Cards 2*/}
        <div className=' rounded-xl relative'>
        {/*Overlay*/}
            <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' text-2xl px-2 pt-4 font-bold'>Lorem ipsum</p>
                <p className=' p-2'>Proin ut tincidunt sapien. risus</p>
                <button className=' bg-white/80 text-black mx-2 mt-28 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__480.jpg" alt='Fruits'/>
        </div>

        {/*Cards 3*/}
        <div className=' rounded-xl relative'>
        {/*Overlay*/}
            <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' text-2xl px-2 pt-4 font-bold'>Lorem ipsum</p>
                <p className=' p-2'>Proin ut tincidunt sapien. risus</p>
                <button className=' bg-white/80 text-black mx-2 mt-28 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523__480.jpg" alt='Fruits'/>
        </div>
    </div>
  )
}

export default HeadlineCards;