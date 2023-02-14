import { CountryType } from '../App'

type cardProps = {
    country: any
}

export default function Card({ country }: cardProps) {
    return (
        <>
            <div className='w-[300px] rounded-md bg-white dark:bg-darkBlue m-auto mt-12 text-black dark:text-White font-semibold shadow-md'>
                <img
                    src={country.flags.png}
                    alt={country.name}
                    height={150}
                    width={300}
                    className='w-{300px} h-[150px] rounded-t-md'
                />
                <div className='p-7'>
                    <h4 className='text-xl font-extrabold mb-5'>
                        {country.name}
                    </h4>
                    <p>
                        Population:{' '}
                        <span className='text-darkGray dark:text-lightGray font-light'>
                            {country.population.toLocaleString()}
                        </span>{' '}
                    </p>
                    <p>
                        Region:{' '}
                        <span className='text-darkGray dark:text-lightGray font-light'>
                            {country.region}
                        </span>{' '}
                    </p>
                    <p className='mb-5'>
                        Capital:{' '}
                        <span className='text-darkGray dark:text-lightGray font-light'>
                            {country.capital}
                        </span>{' '}
                    </p>
                </div>
            </div>
        </>
    )
}
