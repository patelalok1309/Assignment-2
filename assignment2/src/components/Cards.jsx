import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { RiHotelLine } from 'react-icons/ri'
import { BsArrowsMove, BsSquare } from 'react-icons/bs'
import { LiaBedSolid, LiaBathSolid } from 'react-icons/lia'
import { CgSandClock } from 'react-icons/cg'
import Data from '../Data/Data'
import { Link } from 'react-router-dom'

function Cards() {

  const [locationFilter, setLocationFilter] = useState('London')
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const [showMore, setShowMore] = useState(false)

  const filteredData = Data.filter((item) => {
    if (item.city == locationFilter) {
      return true;
    }
  })


  return (
    <div className=''>

      {/* filter buttons  */}
      <div className='flex gap-4 my-5'>
        <button
          onClick={() => {
            setLocationFilter('Mumbai')
            setBtn1(true)
            setBtn2(false)
            setBtn3(false)
            setBtn4(false)
          }}
          className={`rounded-3xl w-32  flex justify-center items-center font-bold  px-3 py-2 ${btn1 ? 'bg-blue-700 text-white' : 'text-black bg-slate-200 '} `}> Mumbai</button>
        <button
          onClick={() => {
            setLocationFilter('London'); // Set location to London
            setBtn1(false); // Set btn1 to false
            setBtn2(true); // Set btn2 to true
            setBtn3(false); // Set btn3 to false
            setBtn4(false); // Set btn4 to false
          }}
          className={`rounded-3xl w-32  flex justify-center items-center font-bold  px-3 py-2 ${btn2 ? 'bg-blue-700 text-white' : 'text-black bg-slate-200'}`}
        >
          London
        </button>

        <button
          onClick={() => {
            setLocationFilter('Paris'); // Set location to Paris
            setBtn1(false); // Set btn1 to false
            setBtn2(false); // Set btn2 to false
            setBtn3(true); // Set btn3 to true
            setBtn4(false); // Set btn4 to false
          }}
          className={`rounded-3xl w-32  flex justify-center items-center font-bold  px-3 py-2 ${btn3 ? 'bg-blue-700 text-white' : 'text-black bg-slate-200'}`}
        >
          Paris
        </button>

        <button
          onClick={() => {
            setLocationFilter('New York'); // Set location to New York
            setBtn1(false);
            setBtn2(false);
            setBtn3(false); // Set btn3 to false
            setBtn4(true); // Set btn4 to true
          }}
          className={`rounded-3xl w-32  flex justify-center items-center font-bold  px-3 py-2 ${btn4 ? 'bg-blue-700 text-white' : 'text-black bg-slate-200'}`}
        >
          New York
        </button>

      </div>

      {/* Property cards  */}
      <div className='grid grid-cols-3 gap-4'>
        {
          filteredData.slice(0, 6).map((item, index) => (
            <Link to={`/item/${item.id}`}>

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

            </Link>
          ))
        }
      </div>

      {/* Show more buttons  */}
      <div className="flex items-center justify-center my-9">
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex justify-center items-center bg-blue-700 text-white font-semibold rounded-3xl px-3 py-2">
          <CgSandClock />
          Show More
        </button>
      </div>


      {/* show more items */}
      {
        showMore && (
          <div className='grid grid-cols-3 gap-4'>
            {
              Data.slice(7, 10).map((item, index) => (
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
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Cards