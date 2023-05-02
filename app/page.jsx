// import Navbar from '@/components/Navbar'
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import hero from './assets/hero.jpg'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Home() {
  const [typeproperty, setTypeProperty] = useState(true)
  const [price, setPrice] = useState(false)
  const [location, setLocation] = useState(false)

  const [downResidance, setDownResidance] = useState(true)
  const [downCommercial, setDownCommercial] = useState(true)

  return (
    <>
      <div className='lg:py-[4rem]'>
        <div className=' side-left'>
          <div className='text lg:hidden lg:px-[1rem] px-[6rem]'>
            <h1 className='font-bold text-2xl lg:text-lg lg:font-semibold'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi vero repellat illum.
            </h1>
            <p className='lg:text-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              repudiandae voluptatum quia, necessitatibus, perspiciatis nostrum
              debitis natus ipsum cum nesciunt sunt fugiat iusto neque
              architecto.
            </p>
          </div>
          <div className='filter py-[1rem] bg-slate-500'>
            <div className='wrapper'>
              <div className='wrap-filter '>
                <ul className='flex gap-x-4 justify-center text-slate-100 mb-3'>
                  <li className=''>
                    <Link href='./buy'>Buy</Link>
                  </li>
                  <li className=''>
                    <Link href='./rent'>Rent</Link>
                  </li>
                </ul>
                <form
                  action=''
                  className='flex justify-center flex-col items-center'
                >
                  <div className='flex items-center'>
                    <div className='relative flex items-center'>
                      <input
                        type='text'
                        className='px-3 py-1 rounded-lg outline-0'
                        placeholder='Search Property'
                      />
                      <FiSearch
                        size={19}
                        className='absolute right-0 mr-2 text-slate-900/70'
                      />
                    </div>
                    <button
                      type='button'
                      className='px-[.5rem] py-[.3rem] bg-slate-400 rounded-lg ml-2'
                    >
                      Search
                    </button>
                  </div>
                  <div className='pt-[1rem]'>
                    <div
                      className='flex items-center gap-x-1 text-slate-200 font-semibold'
                      onClick={() => setTypeProperty(!typeproperty)}
                    >
                      Type Property
                      <MdKeyboardArrowDown />
                      <ul
                        className={`flex gap-x-8 ${
                          typeproperty ? 'block' : 'hidden'
                        }`}
                      >
                        <div className='absolute left-0 right-0 mx-auto top-[12rem] z-50 w-[23rem]'>
                          <div className=' bg-slate-600  rounded-t-lg p-4'>
                            <div className=''>
                              <h1>Type Property</h1>
                              <ul className='flex gap-4 pt-4 text-slate-900 font-normal'>
                                <li
                                  onClick={(e) =>
                                    setDownResidance(!downResidance)
                                  }
                                  className={`px-3 py-[5px] rounded-xl bg-slate-300 `}
                                >
                                  <>Residence</>
                                </li>
                                <li
                                  onClick={(e) =>
                                    setDownCommercial(!downCommercial)
                                  }
                                  className={`px-3 py-[5px] rounded-xl bg-slate-300 `}
                                >
                                  <>Commercial</>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='img '>
          <Image src={hero} className='brightness-90 blur-[.8px]' alt='' />
        </div>
      </div>
    </>
  )
}
