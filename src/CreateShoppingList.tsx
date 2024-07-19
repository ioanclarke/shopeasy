import {Component, For} from "solid-js";
import NavigationButton from "./NavigationButton";

interface CreateShoppingListProps {
    availableItems: string[]
    desiredItems: string[]
    addDesiredItem: (itemName: string) => void
    removeDesiredItem: (itemName: string) => void
    goBackToCatalogue: () => void
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
                    {availableItem => <li class="all-items-item">
                        {availableItem}
                        <input type="checkbox" checked={props.desiredItems.includes(availableItem)}
                               onChange={event => toggleDesired(availableItem, event)}/>

                    </li>}
                </For>
            </ol>
            <hr/>
            <ol>
                <For each={props.desiredItems}>
                    {item => <li>{item}</li>}
                </For>
            </ol>
            <NavigationButton
                text={'Start shopping'}
                direction={'forward'}
                goToPage={props.goToStartShopping}
            />
            <NavigationButton
                text={'Catalogue'}
                direction={'back'}
                goToPage={props.goBackToCatalogue}
            />


            {/*<button onClick={props.goToStartShopping}>Start shopping</button>*/}
            {/*<button onClick={props.goBackToCatalogue}>Back to all items</button>*/}
        </>
    );
}

export default CreateShoppingList