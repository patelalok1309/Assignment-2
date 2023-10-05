import { Link, useParams } from 'react-router-dom'
import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { RiHotelLine } from 'react-icons/ri'
import { BsArrowsMove, BsSquare } from 'react-icons/bs'
import { LiaBedSolid, LiaBathSolid } from 'react-icons/lia'
import { CgSandClock } from 'react-icons/cg'
import Data from '../Data/Data'

function Details() {

    const { id } = useParams();
    const item = Data.find((item)=> item.id == id)

    return (
       <div className='grid place-content-center bg-lightblue flex-col w-screen h-screen'>
        <button className='flex justify-center items-center font-bold bg-blue-700 text-white py-2 px-4 rounded-3xl '>
            <Link to={'/'}>Home</Link>
        </button>

        <div className='grid grid-cols-3 gap-4'>
            <div className='bg-slate-50 rounded-md w-300 p-2 block'>
              <div className='relative '>
                <img src={item.image} className='rounded-md w-295 h-200' />
                <button className="bg-slate-50 rounded-3xl text-sm w-30 text-blue-800 px-2 py-1 absolute top-2 left-3 font-semibold"> For Rent</button>
                <button className="rounded-full absolute top-2 right-3 bg-slate-50 w-5 h-5 flex justify-center items-center">
                  <AiOutlineHeart className='text-blue-700' />
                </button>
              </div>

              {
                item.popular && (
                  <div
                    style={{ top: '187px' }}
                    className='bg-blue-700 text-white rounded-md w-20 my-1 px-4 text-sm py-1'> Popular </div>
                )
              }

              <div className='flex justify-start items-center mt-3 gap-1'>
                <GrLocation className='text-red-500 text-sm' />
                <p className='text-xs'>{item.street}</p>
              </div>

              <div className="font-semibold">
                {item.location}
              </div>

              <div className="flex m-3 gap-3">
                <div className="flex justify-start items-start flex-col p-1">
                  <RiHotelLine />
                  <span> 3 Room</span>
                </div>
                <div className="flex justify-start items-start flex-col p-1">
                  <LiaBedSolid />
                  <span> 4 Bed </span>
                </div>
                <div className="flex justify-start items-start flex-col p-1">
                  <LiaBathSolid />
                  <span> 1 Bath</span>
                </div>
                <div className="flex justify-start items-start flex-col p-1">
                  <BsArrowsMove />
                  <span> 732 sft </span>
                </div>
              </div>

              <div className="flex justify-between p-1">
                <p>
                  <span className='text-2xl font-semibold mb-2 text-blue-700'>${item.rent}</span>
                  /month
                </p>
                <button className="rounded-3xl flex justify-center items-center border border-blue-700 font-bold text-blue-700 px-3 py-2"> Read More</button>
              </div>

            </div>
      </div>
       </div>
    )
}

export default Details