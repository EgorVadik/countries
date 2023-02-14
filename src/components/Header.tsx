import { Link } from 'react-router-dom'

type headerProps = {
    toggleDarkMode: () => void
    darkMode: boolean
}

export default function Header({ toggleDarkMode, darkMode }: headerProps) {
    return (
        <header className='h-20 border-b dark:border-0 dark:shadow-md bg-White dark:bg-darkBlue'>
            <div className='container flex pt-6 m-auto text-black dark:text-white px-4 md:px-0'>
                <Link to={'/'} className='text-header font-bold mr-auto'>
                    Where in the World?
                </Link>
                <button onClick={toggleDarkMode}>
                    <div className='flex '>
                        {darkMode ? (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                height='20'
                                width='20'
                                className='fill-white'
                            >
                                <path d='M10 17q-2.917 0-4.958-2.042Q3 12.917 3 10q0-2.917 2.042-4.958Q7.083 3 10 3q.271 0 .531.021.261.021.531.062-.812.605-1.291 1.5-.479.896-.479 1.917 0 1.771 1.218 2.99 1.219 1.218 2.99 1.218 1.021 0 1.917-.479.895-.479 1.5-1.291.041.27.062.531.021.26.021.531 0 2.917-2.042 4.958Q12.917 17 10 17Z' />
                            </svg>
                        ) : (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                height='20'
                                width='20'
                            >
                                <path d='M10 17q-2.917 0-4.958-2.042Q3 12.917 3 10q0-2.917 2.042-4.958Q7.083 3 10 3q.271 0 .531.021.261.021.531.062-.812.605-1.291 1.5-.479.896-.479 1.917 0 1.771 1.218 2.99 1.219 1.218 2.99 1.218 1.021 0 1.917-.479.895-.479 1.5-1.291.041.27.062.531.021.26.021.531 0 2.917-2.042 4.958Q12.917 17 10 17Zm0-1.5q1.708 0 3.104-.979 1.396-.979 2.042-2.563-.417.104-.823.177-.406.073-.823.073-2.375 0-4.042-1.666Q7.792 8.875 7.792 6.5q0-.417.073-.823.073-.406.177-.823-1.584.646-2.563 2.042Q4.5 8.292 4.5 10q0 2.292 1.604 3.896T10 15.5Zm-.292-5.208Z' />
                            </svg>
                        )}
                        Dark Mode
                    </div>
                </button>
            </div>
        </header>
    )
}
