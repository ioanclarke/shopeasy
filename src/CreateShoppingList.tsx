import {Component, For} from "solid-js";


interface CreateShoppingListProps {
    availableItems: string[]
    desiredItems: string[]
    addDesiredItem: (itemName: string) => void
    removeDesiredItem: (itemName: string) => void
    goBackToAllItems: () => void
    goToStartShopping: () => void
}


const CreateShoppingList: Component<CreateShoppingListProps> = (props: CreateShoppingListProps) => {

    const toggleDesired = (itemName: string, event: Event): void => {
        const isDesired = (event.target as HTMLInputElement).checked
        if (isDesired) {
            props.addDesiredItem(itemName)
        } else {
            props.removeDesiredItem(itemName)
        }
    }

    return (
        <>
            <h1>Create shopping list</h1>
            <ol>
                <For each={props.availableItems}>
                    {availableItem => <li>
                        <input type="checkbox" checked={props.desiredItems.includes(availableItem)}
                               onChange={event => toggleDesired(availableItem, event)}/>
                        {availableItem}

                    </li>}
                </For>
            </ol>
            <hr/>
            <ol>
                <For each={props.desiredItems}>
                    {item => <li>{item}</li>}
                </For>
            </ol>
            <button onClick={props.goToStartShopping}>Start shopping</button>
            <button onClick={props.goBackToAllItems}>Back to all items</button>
        </>
    );
}

// interface ShoppingListItemProps {
//     item: types.ShoppingListItem
//     toggleChecked: (itemName: string, event: any) => void
// }
//
// const ShoppingListItem: Component = (props: ShoppingListItemProps) =>
//     <li class="shopping-list-item">
//         <input type="checkbox" checked={props.item.checked}
//                onChange={event => props.toggleChecked(props.item, event)}/>
//         {props.item}
//     </li>

export default CreateShoppingList