import { useState } from 'react';
import './App.css'
import { getElementsList, type ElementItem } from './data/elements';
import FilterElements from './components/FilterElements';
import ElementsFooter from './components/ElementsFooter';
import UpdatedElementsList from './components/UpdatedElementsList';
import ElementsList from './components/ElementsList';

function App() {

  const [elementsList] = useState<ElementItem[]>(() => getElementsList(20000));
  const [elements, setElements] = useState<ElementItem[]>(elementsList);
  const [editElements, setEditElements] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<ElementItem[]>([]);
  const [updatedItems, setUpdatedItems] = useState<ElementItem[]>([]);

  const isDisabled = (element: ElementItem) => selectedItems.length === 3
    && !selectedItems.some(item => item.id === element.id)

  const handleCheckboxChange = (element: ElementItem, isChecked: boolean) => {
    if (isChecked) {
      if (selectedItems.length < 3) {
        setSelectedItems([...selectedItems, element]);
      }
    } else {
      setSelectedItems(selectedItems.filter(item => item.id !== element.id))
    }
  }

  const changeMyChoiceHandler = () => {
    if (!editElements) {
      setEditElements(true)
      setSelectedItems(updatedItems)
    }
  }

  const saveHandler = () => {
    setUpdatedItems(selectedItems);
    setSelectedItems([]);
    setEditElements(false);
  }

  const cancelHandler = () => {
    setSelectedItems([]);
    setEditElements(false);
  }

  const removeUpdatedElement = (element: ElementItem) => {
    setUpdatedItems(updatedItems.filter(item => item.id !== element.id));
  }

  const filterElements = (searchParams: string, filter: string) => {
    if (!!searchParams && !!filter && filter == 'no_filter') {
      let filteredBySearchParams: ElementItem[] = elementsList.filter(element =>
        element.label.toLowerCase().includes(searchParams.toLowerCase()));
      setElements(filteredBySearchParams);
    } else if (!!searchParams || (!!filter && filter != 'no_filter')) {
      let filteredByParams: ElementItem[] = elementsList.filter(element =>
        element.label.toLowerCase().includes(searchParams.toLowerCase()) && element.id > Number(filter));
      setElements(filteredByParams);
    } else {
      setElements(elementsList);
    }
  }

  return (
    <>
      <section className="center">
        <div className="header">
          <h2>Select items</h2>

          <UpdatedElementsList
            updatedItems={updatedItems}
            removeUpdatedElement={removeUpdatedElement}
          />

          <button
            className="change-my-choice"
            onClick={changeMyChoiceHandler}
          >
            <span className="change-my-choice-text">Change my choice</span>
          </button>
        </div>

        <div className="container">

          {editElements ? (
            <>
              <div className="select-items">
                <span className="select-items-label">Select items</span>
              </div>

              <div>
                <FilterElements filterElements={filterElements} />

                <ElementsList
                  selectedItems={selectedItems}
                  elements={elements}
                  isDisabled={isDisabled}
                  handleCheckboxChange={handleCheckboxChange}
                />

                <ElementsFooter
                  selectedItems={selectedItems}
                  cancelHandler={cancelHandler}
                  saveHandler={saveHandler}
                  removeElement={(item) => handleCheckboxChange(item, false)}
                />

              </div>
            </>
          ) : (
            <div className="edit-info-container">
              <span className="edit-info-text">
                Click "Change my choice" to edit your selection
              </span>
            </div>
          )}


        </div>


      </section>
    </>
  )
}

export default App
