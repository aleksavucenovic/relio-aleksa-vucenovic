import { List, type RowComponentProps } from "react-window";
import type { ElementItem } from "../data/elements";


type ElementsListProps = {
    selectedItems: ElementItem[];
    elements: ElementItem[];
    isDisabled: (element: ElementItem) => boolean;
    handleCheckboxChange: (element: ElementItem, isChecked: boolean) => void;
};

const Row = ({
    index, style,
    elements, selectedItems,
    isDisabled, handleCheckboxChange
}: RowComponentProps<ElementsListProps>) => {

    const element = elements[index];

    return (
        <div
            style={style}
            className={`element ${isDisabled(element) ? 'disabled' : ''}`}
        >
            <input
                type="checkbox"
                className="element-checkbox"
                disabled={isDisabled(element)}
                checked={selectedItems.some(item => item.id === element.id)}
                onChange={(e) =>
                    handleCheckboxChange(element, e.target.checked)
                }
            />

            <span>{element.label}</span>
        </div>
    );
};

const ElementsListReactWindow = ({
    selectedItems,
    elements,
    isDisabled,
    handleCheckboxChange
}: ElementsListProps) => {

    return (
        <>
            {elements.length > 0 ?
                <List
                    rowComponent={Row}
                    rowCount={elements.length}
                    rowHeight={50}
                    style={{
                        height: 400,
                        borderLeft: '1px solid #b5b5b5',
                        borderRight: '1px solid #b5b5b5',
                        borderBottom: '1px solid #b5b5b5',
                        overflowX: 'hidden',
                    }}
                    rowProps={{
                        elements,
                        selectedItems,
                        isDisabled,
                        handleCheckboxChange,
                    }}
                />
                : (
                    <div className="no-elements-container">
                        <span className="no-elements-text">No elements found.</span>
                    </div>
                )
            }
        </>
    );
}

export default ElementsListReactWindow;