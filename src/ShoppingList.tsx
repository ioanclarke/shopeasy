import {Component, For} from "solid-js";
import NavigationButton from "./NavigationButton";


interface ShoppingListProps {
    desiredItems: string[]
    collectedItems: string[]
    checkItem: (itemName: string) => void
    uncheckItem: (itemName: string) => void
    goBackToCreateShoppingList: () => void
}

const ShoppingList: Component<ShoppingListProps> = (props: ShoppingListProps) => {

    const remainingItems = (): string[] =>
        props.desiredItems.filter(item => !props.collectedItems.includes(item))

    return (
        <>
            <h1>Shopping list</h1>
            {remainingItems().length === 0
                ? <h2 class="finished-shopping">You've got everything!</h2>
                : <ol id="unchecked-items">
                    <For each={remainingItems()}>
                        {(item: string) => <ShoppingListItem
                            item={item}
                            checked={false}
                            toggleChecked={() => props.checkItem(item)}/>}
                    </For>
                </ol>}
            {props.collectedItems.length > 0 &&
                <details class="collected-items">
                    <summary>Collected ({props.collectedItems.length} items)</summary>
                    <ol id="checked-items">
                        <For each={props.desiredItems.filter(item => props.collectedItems.includes(item))}>
                            {item => <ShoppingListItem
                                item={item}
                                checked={true}
                                toggleChecked={() => props.uncheckItem(item)}/>}
                        </For>
                    </ol>
                </details>
            }
            <NavigationButton
                text={'Create shopping list'}
                direction={'back'}
                goToPage={props.goBackToCreateShoppingList}
            />
        </>
    );
}

interface ShoppingListItemProps {
    item: string
    checked: boolean
    toggleChecked: (itemName: string) => void
}

const ShoppingListItem: Component<ShoppingListItemProps> = (props: ShoppingListItemProps) =>
    <li class="all-items-item">
        {props.item}
        <input type="checkbox" checked={props.checked}
               onChange={() => props.toggleChecked(props.item)}/>
    </li>

export default ShoppingList