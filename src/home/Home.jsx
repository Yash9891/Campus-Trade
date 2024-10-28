import React from 'react'
import { Banner } from '../components/Banner'
import { FavoriteItems } from './FavoriteItems'
import { FavItem } from './FavItem'
import { PromoBanner } from './PromoBanner'
import { OtherItems } from './OtherItems'
import { Review } from './Review'

export const Home = () => {
  return (
<>
<Banner/>
<FavoriteItems/>
<FavItem/>
<PromoBanner/>
<OtherItems/>
<Review/>
</>

  )
}
