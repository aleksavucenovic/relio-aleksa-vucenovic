import { useState } from 'react';
import './App.css'
import { getElementsList, type ElementItem } from './data/elements';

function App() {

  const [elements] = useState<ElementItem[]>(getElementsList(5));


  return (
    <>
      <section className="center">
        <div className="header">
          <h2>Select items</h2>

          <button
            className="change-my-choice"
            onClick={() => {}}
          >
            <span className="change-my-choice-text">Change my choice</span>
          </button>
        </div>

        <div className="container">

          <div className="select-items">
            <span className="select-items-label">Select items</span>
          </div>

          <ul className="elements-list">
            {elements.map((element) => (
              <li key={element.id} className="element">
                <span>{element.label}</span>
              </li>
            ))}
          </ul>
        </div>


      </section>
    </>
  )
}

export default App
