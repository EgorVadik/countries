import FilterBar from './FilterBar'
import Card from './Card'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const [countries, setCountries] = useState<any[]>()
    const [tempcountries, setTempCountries] = useState<any[]>()

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => {
                setCountries(data)
                setTempCountries(data)
            })
    }, [])

    function searchCountry(name: string) {
        setCountries(
            tempcountries!.filter((country) => {
                return country.name.official.toLowerCase().includes(name)
            })
        )
    }

    function filterRegion(region: string) {
        if (region === 'Filter by Region') {
            setCountries(tempcountries)
        } else {
            setCountries(
                tempcountries!.filter((country) => {
                    return country.region === region
                })
            )
        }
    }

    return (
        <>
            <main className='container m-auto mt-9'>
                <FilterBar
                    searchCountry={searchCountry}
                    filterRegion={filterRegion}
                />
                <div className='grid place-content-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[80%] md:w-full m-auto'>
                    {countries !== undefined ? (
                        countries!.map((country) => {
                            return (
                                <Link
                                    key={country.name.official}
                                    to={`/${country.name.official}`}
                                >
                                    <Card country={country} />
                                </Link>
                            )
                        })
                    ) : (
                        <>Loading...</>
                    )}
                </div>
                <div className='invisible mt-4'>.</div>
            </main>
        </>
    )
}
