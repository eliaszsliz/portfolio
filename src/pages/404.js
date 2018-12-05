import React from 'react'

const NotFoundPage = () => (
  <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  }}>
      <figure className='image  is-192x192'>
          <img src="/images/mojatwarz.jpg"
               alt=""
               className='is-rounded'
               style={{
                   transform: 'rotate(180deg)',
               }}
          />
      </figure>

      <h1 style={{
          fontSize: '13vh'
      }} className='has-text-primary'>404</h1>
      <p>Podana strona nie istnieje 😢</p>

      <a href="/">Napraw</a>
  </div>

)

export default NotFoundPage
