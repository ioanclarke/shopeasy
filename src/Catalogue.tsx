import {Component, createSignal, For, JSX} from "solid-js";
import Cross from './assets/cross.png'
import NavigationButton from "./NavigationButton";

interface CatalogueProps {
    items: string[]
    addItem: (item: string) => void
    removeItem: (item: string) => void
    goToCreateShoppingList: () => void
}

const Catalogue: Component<CatalogueProps> = (props: CatalogueProps) => {
    const [newItem, setNewItem] = createSignal<string>('')

    const updateNewItem: JSX.InputEventHandler<HTMLInputElement, InputEvent> = (event: InputEvent) => {
        let value = (event.target as HTMLInputElement).value.toLowerCase();
        setNewItem(value)
    }

    const submiteNewItem: JSX.EventHandler<HTMLInputElement, KeyboardEvent> = (event: KeyboardEvent): void => {
        if (event.key === 'Enter' && newItem().length > 0 && !isDuplicateNewItem()) {
            props.addItem(newItem())
            setNewItem('')
        }
    }

    const isDuplicateNewItem = (): boolean => props.items.includes(newItem())

    return (
        <>
            <h1>Catalogue</h1>
            <ol>
                <For each={props.items}>
                    {item => (
                        <li class="all-items-item">{item}
                            <img
                                src={Cross}
                                class="remove-item"
                                style="height:15px;"
                                onClick={() => props.removeItem(item)}
                                alt="delete-item"
                            />
                        </li>)}
                </For>
            </ol>
            <input
                type="text"
                class="new-item-input"
                placeholder="New item"
                value={newItem()}
                onInput={updateNewItem}
                onKeyUp={submiteNewItem}/>
            <p class={isDuplicateNewItem() ? 'error' : 'hidden'}>Item already exists</p>

            <NavigationButton
                text={'Create shopping list'}
                direction={'forward'}
                goToPage={props.goToCreateShoppingList}
            />
        </>
    )
}

export default Catalogue