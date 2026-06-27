import { useState } from 'react';
import './App.css'
import { getElementsList, type ElementItem } from './data/elements';
import FilterElements from './components/FilterElements';

function App() {

  const [elements] = useState<ElementItem[]>(getElementsList(5));
  const [editElements, setEditElements] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<ElementItem[]>([]);

  const isDisabled = (element: ElementItem) => selectedItems.length === 3 && !selectedItems.includes(element);

  const handleCheckboxChange = (element: ElementItem, isChecked: boolean) => {
    if (isChecked) {
      if (selectedItems.length < 3) {
        setSelectedItems([...selectedItems, element]);
      }
    } else {
      setSelectedItems(selectedItems.filter(item => item.id !== element.id))
    }
  }

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
                  <li
                    key={element.id}
                    className={`element ${isDisabled(element) ? 'disabled' : ''}`}
                  >
                    <input
                      type="checkbox"
                      className="element-checkbox"
                      disabled={isDisabled(element)}
                      onChange={(e) => handleCheckboxChange(element, e.target.checked)}
                    />

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
