import React from 'react'

function List() {

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <header>
        <h2>Beverages List</h2>
        <p>Choose your favorite drink from the list below:</p>
      </header>
      
      <div>
        <h3>Beverages:</h3>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>

      <footer style={{ marginTop: '20px' }}>
        <p>Enjoy your drink!</p>
      </footer>
    </div>
  )
}

export default List