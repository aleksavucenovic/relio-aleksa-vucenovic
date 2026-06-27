import type { ElementItem } from "../data/elements";

type ElementsListProps = {
    selectedItems: ElementItem[];
    elements: ElementItem[];
    isDisabled: (element: ElementItem) => boolean;
    handleCheckboxChange: (element: ElementItem, isChecked: boolean) => void;
};

const ElementsList = ({
    selectedItems,
    elements,
    isDisabled,
    handleCheckboxChange
}: ElementsListProps) => {

    return (
        <>
            <ul className="elements-list">
                {elements.length > 0
                    ? elements.map((element) => (
                        <li
                            key={element.id}
                            className={`element ${isDisabled(element) ? 'disabled' : ''}`}
                        >
                            <input
                                type="checkbox"
                                className="element-checkbox"
                                disabled={isDisabled(element)}
                                onChange={(e) => handleCheckboxChange(element, e.target.checked)}
                                checked={selectedItems.some(item => item.id === element.id)}
                            />

                            <span>{element.label}</span>
                        </li>
                    ))
                    :
                    <div className="no-elements-container">
                        <span className="no-elements-text">No elements found.</span>
                    </div>
                }
            </ul>
        </>
    );
}

export default ElementsList;