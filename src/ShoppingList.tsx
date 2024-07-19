import {Component, For} from "solid-js";


interface ShoppingListProps {
    desiredItems: string[]
    collectdItems: string[]
    checkItem: (itemName: string) => void
    uncheckItem: (itemName: string) => void
    goBackToCreateShoppingList: () => void
}

const ShoppingList: Component<ShoppingListProps> = (props: ShoppingListProps) => {
    return (
        <>
            <h1>Shopping list</h1>
            <ol id="unchecked-items">
                <For each={props.desiredItems.filter(item => !props.collectdItems.includes(item))}>
                    {(item: string) => <ShoppingListItem
                        item={item}
                        checked={false}
                        toggleChecked={() => props.checkItem(item)}/>}
                </For>
            </ol>
            <hr/>
            <ol id="checked-items">
                <For each={props.desiredItems.filter(item => props.collectdItems.includes(item))}>
                    {item => <ShoppingListItem
                        item={item}
                        checked={true}
                        toggleChecked={() => props.uncheckItem(item)}/>}
                </For>
            </ol>
            <button onClick={props.goBackToCreateShoppingList}>Back to create shopping list</button>
        </>
    );
}

interface ShoppingListItemProps {
    item: string
    checked: boolean
    toggleChecked: (itemName: string) => void
}

const ShoppingListItem: Component<ShoppingListItemProps> = (props: ShoppingListItemProps) =>
    <li class="shopping-list-item">
        <input type="checkbox" checked={props.checked}
               onChange={() => props.toggleChecked(props.item)}/>
        {props.item}
    </li>

export default ShoppingList