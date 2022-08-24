import { useSearchParams } from 'react-router-dom'
import useByGenre from '../hooks/useByGenre'
import useGenreList from '../hooks/useGenreList'
import { useState } from 'react'

// components
import WarningAlert from '../components/alerts/WarningAlert'

// styles
import Container from 'react-bootstrap/Container'

const GenrePage = () => {
  let genreName = ''
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1, 
    genre_id: "",
  })

  const  genre_id  = searchParams.get('genre_id')
  const page = searchParams.get('page')

  const { data: genreList, error, isError, isLoading } = useGenreList()
  const { data: byGenres } = useByGenre()

  genreList?.genres?.find(genre => {
    if (Number(genre_id) === genre.id) {
      genreName = genre.name
      console.log('genre_id: ',genre_id )

    }
  })


   console.log('byGenres', byGenres?.results)
   

  return (
    <Container>
        {isLoading && (<p className="my-3">Loading Movies...</p>)}

        {isError && <WarningAlert message={error.message} />}
    
        {genreList && (
          <>
            <h1>Genre</h1>
            {genreList.genres.map(genre => (
              <div 
                key={genre.id}
                onClick={() => setSearchParams({
                  genre_id: genre.id,
                  page: 1
                })}
              >
                {genre.name}
              </div>
            ))}                    
          </>          
        )}

        {byGenres && (
          <>
            <h2>{genreName}</h2>
          </>
        )}

    </Container>
  )
}

export default GenrePage


