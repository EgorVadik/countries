import { useState } from 'react'

type filterBarProps = {
    searchCountry: (name: string) => void
    filterRegion: (region: string) => void
}

export default function FilterBar({
    searchCountry,
    filterRegion,
}: filterBarProps) {
    const [isOn, setIsOn] = useState('Filter by Region')
    return (
        <div className='flex flex-wrap w-[80%] md:w-full xl:w-[95%] m-auto'>
            <div className='mr-auto w-full md:w-[40%] text-home mb-8 md:mb-0 shadow-md relative'>
                <input
                    type='text'
                    placeholder='Search for a country...'
                    className='mr-auto bg-white dark:bg-darkBlue text-black dark:text-White w-full text-home pl-16 p-4 rounded-md   focus:outline-none'
                    onChange={(e) => {
                        searchCountry(e.target.value)
                    }}
                />
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24'
                    width='24'
                    className='absolute top-[0.9rem] left-5 fill-black dark:fill-white'
                >
                    <path d='m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z' />
                </svg>
            </div>

            <button
                id='dropdownButton'
                data-dropdown-toggle='dropdown'
                className='bg-white dark:bg-darkBlue text-black dark:text-white rounded-md px-4 py-2.5 text-center inline-flex items-center font-semibold shadow-md'
                type='button'
            >
                {isOn}{' '}
                <svg
                    className='ml-2 w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                    ></path>
                </svg>
            </button>

            <div
                id='dropdown'
                className='hidden z-10 w-44 text-home font-semibold list-none bg-white rounded-md dark:bg-darkBlue shadow-md'
            >
                <ul className='py-1' aria-labelledby='dropdownButton'>
                    {isOn !== 'Filter by Region' && (
                        <li>{dropDownBtn('Filter by Region')}</li>
                    )}
                    {isOn !== 'Africa' && <li>{dropDownBtn('Africa')}</li>}
                    {isOn !== 'America' && <li>{dropDownBtn('America')}</li>}
                    {isOn !== 'Asia' && <li>{dropDownBtn('Asia')}</li>}
                    {isOn !== 'Europe' && <li>{dropDownBtn('Europe')}</li>}
                    {isOn !== 'Oceania' && <li>{dropDownBtn('Oceania')}</li>}
                </ul>
            </div>
        </div>
    )

    function dropDownBtn(region: string) {
        return (
            <button
                className='block py-2 px-4 text-black dark:text-white hover:bg-darkGray w-full text-left'
                onClick={() => {
                    setIsOn(region)
                    filterRegion(region)
                }}
            >
                {region}
            </button>
        )
    }
}
