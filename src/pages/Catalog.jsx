import React from 'react'

import { useParams, useLocation } from 'react-router'

import PageHeader from '../components/page-header/PageHeader'

import { category as cate } from '../api/tmdbApi'
import MovieGrid from '../components/movie-grid/MovieGrid'

const Catalog = () => {
  const { category } = useParams()
  const title = category.charAt(0).toUpperCase() + category.slice(1)
  document.title = title

  return (
    <>
      <PageHeader>
        {category === cate.movie ? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  )
}

export default Catalog
