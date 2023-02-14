import FilterBar from './FilterBar'
import countriesJson from '../../data.json'
import Card from './Card'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const [countries, setCountries] = useState(countriesJson.slice(0, 8))

    // useEffect(() => {
    //     fetch('https://restcountries.com/v3.1/all')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setCountries(data)
    //         })
    // })

    function searchCountry(name: string) {
        setCountries(
            countriesJson.filter((country) => {
                return country.name.toLowerCase().includes(name)
            })
        )
    }

    function filterRegion(region: string) {
        if (region === 'Filter by Region') {
            setCountries(countriesJson)
        } else {
            setCountries(
                countriesJson.filter((country) => {
                    return country.region === region
                })
            )
        }
    }

    function loadMore() {
        setCountries([
            ...countries,
            ...countriesJson.slice(countries.length, countries.length + 8),
        ])
    }

    return (
        <>
            <main className='container m-auto mt-9'>
                <FilterBar
                    searchCountry={searchCountry}
                    filterRegion={filterRegion}
                />
                <div className='grid place-content-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[80%] md:w-full m-auto'>
                    {countries.map((country) => {
                        return (
                            <Link key={country.name} to={`/${country.name}`}>
                                <Card country={country} />
                            </Link>
                        )
                    })}
                </div>
                <button
                    onClick={loadMore}
                    className='bg-white m-auto w-full mt-6 text-3xl'
                >
                    Load More
                </button>
                <div className='invisible mt-4'>.</div>
            </main>
        </>
    )
}
