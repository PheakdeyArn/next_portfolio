import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'
import { cn } from '@/utils/cn'

export const Experience = () => {
    return (
        <div className='py-20' id='experience'>
            <h1 className='heading'>
                My <span className='text-purple'>Work Experience</span>
            </h1>

            <div className="w-full mt-12 flex lg:grid-cols-4 grid-cols-1 gap-10 ">
                {/* <div className="justify-center bg-white-100 items-center"> */}
                {workExperience.map((card, index) => (
                    <div  key={card.id} className={cn(
                        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  border border-transparent justify-between flex flex-col space-y-4",
                        card.className
                    )}>
                        <Button
                           
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius='1.75rem'
                            className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                            <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                                <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
                                <div className="lg:ms-5">
                                    <h1 className='text-start text-xl md:text-2xl font-bold'>{card.position} - <span className='text-purple'>{card.org}</span></h1>
                                    <p className='text-start text-white-100 mt-3 font-semibold'>{card.date}</p>
                                </div>``
                            </div>
                        </Button>
                    </div>
                ))}
                {/* </div> */}
            </div>

        </div>
    )
}
