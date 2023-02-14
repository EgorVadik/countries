import { useParams, Link, useNavigate } from 'react-router-dom'
import countriesJson from '../../data.json'

export default function Country() {
    const { name } = useParams()
    const nav = useNavigate()

    const country = countriesJson.filter((c) => c.name === name)[0]
    const borderCountries = country.borders?.map((border) => {
        {
            return countriesJson.filter((c) => {
                return c.alpha3Code === border
            })[0]
        }
    })

    return (
        <div className='container m-auto w-[80%] md:w-full'>
            <button
                className='px-10 py-1 text-black dark:text-white bg-white dark:bg-darkBlue rounded shadow-md my-10 hover:bg-lightGray hover:dark:bg-lightGray hover:dark:text-black'
                onClick={() => nav(-1)}
            >
                <span className='font-bold text-xl'>←</span> Back
            </button>
            <div className='flex flex-wrap'>
                <div className='md:w-1/2 w-full'>
                    <img
                        src={country.flags.png}
                        alt={country.name}
                        className='w-full h-full md:w-[80%] md:h-[70%]'
                    />
                </div>
                <div className='md:w-1/2 w-full text-black dark:text-White text-detail font-semibold'>
                    <h1 className='text-xl font-extrabold mb-5 mt-5 md:mt-0'>
                        {country.name}
                    </h1>
                    <div className='flex flex-wrap'>
                        <div className='w-full md:w-1/2'>
                            <p className='my-3'>
                                Native Name:{' '}
                                <span className='text-darkGray dark:text-lightGray font-light'>
                                    {country.nativeName}
                                </span>
                            </p>
                            <p className='my-3'>
                                Population:{' '}
                                <span className='text-darkGray dark:text-lightGray font-light'>
                                    {country.population.toLocaleString()}
                                </span>
                            </p>
                            <p className='my-3'>
                                Region:{' '}
                                <span className='text-darkGray dark:text-lightGray font-light'>
                                    {country.region}
                                </span>
                            </p>
                            <p className='my-3'>
                                Sub Region:{' '}
                                <span className='text-darkGray dark:text-lightGray font-light'>
                                    {country.subregion}
                                </span>
                            </p>
                            <p className='my-3'>
                                Capital:{' '}
                                <span className='text-darkGray dark:text-lightGray font-light'>
                                    {country.capital}
                                </span>
                            </p>
                        </div>

                        <div className='w-full md:w-1/2'>
                            <p className='my-3'>
                                Top Level Domain:{' '}
                                <span className='text-darkGray dark:text-lightGray font-light'>
                                    {country.topLevelDomain}
                                </span>
                            </p>
                            <p className='my-3'>
                                Currencies:{' '}
                                <span className='text-darkGray dark:text-lightGray font-light'>
                                    {country.currencies?.map((curr) => {
                                        return curr.name + ' '
                                    })}
                                </span>
                            </p>
                            <p className='my-3'>
                                Languages:{' '}
                                <span className='text-darkGray dark:text-lightGray font-light'>
                                    {country.languages.map((lang) => {
                                        return lang.name + ' '
                                    })}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-wrap items-center mt-16'>
                        <p className='pr-3'>Border Countries:</p>
                        <div className='flex flex-wrap'>
                            {borderCountries?.map((border) => {
                                return (
                                    <Link
                                        key={border.name}
                                        to={`/${border.name}`}
                                        className='bg-white dark:bg-darkBlue mt-4 mb-2 mr-2 px-4 rounded shadow-md hover:bg-lightGray hover:dark:bg-lightGray hover:dark:text-black'
                                    >
                                        {border.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className='invisible my-5'>.</div>
                </div>
            </div>
        </div>
    )
}
