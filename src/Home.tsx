import type {Component} from 'solid-js';
import {createSignal, JSX, onMount} from "solid-js";
import * as types from "./models";
import * as storage from "./storage";
import './styles.css'
import CreateShoppingList from "./CreateShoppingList";
import ShoppingList from "./ShoppingList";
import AllItems from "./AllItems";

type State = 'allItems' | 'createShoppingList' | 'shopping'

const Home: Component = () => {
    const [state, setState] = createSignal<State>('allItems')
    const [allItems, setAllItems] = createSignal<types.AllItems>([])
    const [desiredItems, setDesiredItems] = createSignal<string[]>([])
    const [collectedItems, setCollectedItems] = createSignal<string[]>([])

    onMount(() => {
        const allItems1 = storage.getAllItems();
        setAllItems(allItems1)
    })

    const addItemToAllItems = (item: string): void => {
        setAllItems(() => storage.addItem(item))
    }

    const removeItemFromAllItems = (itemToRemove: string): void => {
        setAllItems(() => storage.removeItem(itemToRemove))
        setDesiredItems(current => current.filter(i => i !== itemToRemove))
        setCollectedItems(current => current.filter(i => i !== itemToRemove))
    }

    const addDesiredItem = (itemName: string): void => {
        setDesiredItems(current => current.concat(itemName))
    }

    const removeDesiredItem = (itemName: string): void => {
        setDesiredItems(current => current.filter(i => i !== itemName))
        setCollectedItems(current => current.filter(i => i !== itemName))
    }

    const collectShoppingListItem = (itemName: string): void => {
        setCollectedItems(current => current.concat(itemName))
    }

    const uncollectShoppingListItem = (itemName: string): void => {
        setCollectedItems(current => current.filter(i => i !== itemName))
    }

    return <>{((): JSX.Element => {
        switch (state()) {
            case 'allItems':
                return <AllItems
                    allItems={allItems()}
                    addItem={addItemToAllItems}
                    removeItem={removeItemFromAllItems}
                    goToCreateShoppingList={() => setState('createShoppingList')}
                />

            case 'createShoppingList':
                return <CreateShoppingList
                    availableItems={allItems()}
                    desiredItems={desiredItems()}
                    addDesiredItem={addDesiredItem}
                    removeDesiredItem={removeDesiredItem}
                    goBackToAllItems={() => setState('allItems')}
                    goToStartShopping={() => setState('shopping')}
                />
            case 'shopping':
                return <ShoppingList
                    desiredItems={desiredItems()}
                    collectdItems={collectedItems()}
                    checkItem={collectShoppingListItem}
                    uncheckItem={uncollectShoppingListItem}
                    goBackToCreateShoppingList={() => setState('createShoppingList')}/>
        }
    })()}</>

};


export default Home;
