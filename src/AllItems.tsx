import {Component, createSignal, For, JSX} from "solid-js";
import * as types from './models'

interface AllItemsProps {
    allItems: types.AllItems
    addItem: (item: string) => void
    removeItem: (item: string) => void
    goToCreateShoppingList: () => void
}

const AllItems: Component<AllItemsProps> = (props: AllItemsProps) => {
    const [newItem, setNewItem] = createSignal<string>('')
    const [error, setError] = createSignal<string | null>(null)

    const updateNewItem: JSX.InputEventHandler<HTMLInputElement, InputEvent> = (event: InputEvent) => {
        let value = (event.target as HTMLInputElement).value;
        setNewItem(value)

        if (props.allItems.includes(value)) {
            setError('Item already exists')
        } else {
            setError(null)
        }
    }

    const submiteNewItem: JSX.EventHandler<HTMLInputElement, KeyboardEvent> = (event: KeyboardEvent): void => {
        if (event.key === 'Enter' && error() === null) {
            props.addItem(newItem())
            setNewItem('')
        }
    }

    return (
        <>
            <ol>
                <For each={props.allItems}>
                    {item => <li>{item}
                        <span class="remove-item" onClick={() => props.removeItem(item)}>❌</span>
                    </li>}
                </For>
            </ol>
            <input
                type="text"
                class="new-item-input"
                placeholder="New item"
                value={newItem()}
                onInput={updateNewItem}
                onKeyUp={submiteNewItem}/>
            {error() !== null && <p>{error()}</p>}
            <button
                class="navigation-button"
                onClick={() => props.goToCreateShoppingList()}>
                Create shopping list

                {/*<img class="arrow" src="./assets/arrow-right.png" alt="arrow-right"/>*/}
                <svg width="20px" height="20px" viewBox="0 -5 24.00 24.00" fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                       stroke-width="0.192"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#eeeeee" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </button>
        </>
    )
}

export default AllItems