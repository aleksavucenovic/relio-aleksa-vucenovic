import { useState } from 'react';
import './App.css'
import { getElementsList, type ElementItem } from './data/elements';
import FilterElements from './components/FilterElements';

function App() {

  const [elements] = useState<ElementItem[]>(getElementsList(5));
  const [editElements, setEditElements] = useState<boolean>(false);


  return (
    <>
      <section className="center">
        <div className="header">
          <h2>Select items</h2>

          <button
            className="change-my-choice"
            onClick={() => setEditElements(true)}
          >
            <span className="change-my-choice-text">Change my choice</span>
          </button>
        </div>

        <div className="container">

          <div className="select-items">
            <span className="select-items-label">Select items</span>
          </div>

          {editElements ? (
            <div>
              <FilterElements />

              <ul className="elements-list">
                {elements.map((element) => (
                  <li key={element.id} className="element">
                    <span>{element.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="edit-info-container">
              <span className="edit-info-text">Click "Change my choice" to edit your selection</span>
            </div>
          )}


        </div>


      </section>
    </>
  )
}

export default App
