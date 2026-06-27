import type { ElementItem } from "../data/elements";

type ElementsFooterProps = {
    selectedItems: ElementItem[];
    cancelHandler: () => void;
    saveHandler: () => void;
    removeElement: (item: ElementItem) => void;
};

const ElementsFooter = ({
    selectedItems, cancelHandler, saveHandler, removeElement
}: ElementsFooterProps) => {

    return (
        <div className="footer">
            <div className="current-selected-items">

                {selectedItems.length > 0
                    ? (
                        <span>Current selected items: </span>
                    )
                    : (
                        <span>No items selected</span>
                    )}

                {selectedItems.map((item, index) => {
                    return (
                        <div key={item.id} onClick={() => removeElement(item)} className="selected-element">
                            <span className="selected-element-label">
                                {item.label}
                            </span>

                            <span className="selected-element-remove">
                                &times;
                            </span>
                        </div>
                    );
                })}

            </div>

            <div className="buttons-bar">
                <button
                    className="save-text-button"
                    onClick={saveHandler}
                    disabled={selectedItems.length === 0}
                >
                    <span className="save-text">Save</span>
                </button>

                <button
                    className="cancel-text-button"
                    onClick={cancelHandler}
                >
                    <span className="cancel-text">Cancel</span>
                </button>
            </div>
        </div>
    );
}

export default ElementsFooter;