import type { ElementItem } from "../data/elements";

type UpdatedElementsListProps = {
    updatedItems: ElementItem[];
};

const UpdatedElementsList = ({
    updatedItems
}: UpdatedElementsListProps) => {

    return (
        <div className="updated-elements-container">
            <div className="updated-elements-items">
                <span>Saved items: </span>

                {updatedItems.map((item, index) => {
                    return (
                        <div key={item.id} className="updated-element">
                            <span className="updated-element-label" >{item.label}</span>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default UpdatedElementsList;