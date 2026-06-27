import type { ElementItem } from "../data/elements";

type UpdatedElementsListProps = {
    updatedItems: ElementItem[];
    removeUpdatedElement: (item: ElementItem) => void;
};

const UpdatedElementsList = ({
    updatedItems,
    removeUpdatedElement
}: UpdatedElementsListProps) => {

    return (
        <div className="updated-elements-container">
            <div className="updated-elements-items">

                {updatedItems.length > 0
                    ? (
                        <span>Saved items: </span>
                    )
                    : (
                        <span>No saved items</span>
                    )}

                {updatedItems.map((item) => {
                    return (
                        <div key={item.id} className="updated-element" onClick={() => removeUpdatedElement(item)}>
                            <span className="updated-element-label">
                                {item.label}
                            </span>

                            <span className="selected-element-remove">
                                &times;
                            </span>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default UpdatedElementsList;