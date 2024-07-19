import type {Component} from 'solid-js';
import {createSignal, JSX, onMount} from "solid-js";
import * as types from "./models";
import * as storage from "./storage";
import './styles.css'
import CreateShoppingList from "./CreateShoppingList";
import ShoppingList from "./ShoppingList";
import Catalogue from "./Catalogue";

type Page = 'catalogue' | 'createShoppingList' | 'shopping'

const Home: Component = () => {
    const [page, setPage] = createSignal<Page>('catalogue')
    const [allItems, setAllItems] = createSignal<types.AllItems>([])
    const [desiredItems, setDesiredItems] = createSignal<string[]>([])
    const [collectedItems, setCollectedItems] = createSignal<string[]>([])

    onMount(() => {
        const allItems1 = storage.getAllItems();
        setAllItems(allItems1)
    })

    const addItemToCatalogue = (item: string): void => {
        setAllItems(() => storage.addItem(item))
    }

    const removeItemFromCatalogue = (itemToRemove: string): void => {
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

    const goTo = (page: Page): (() => void) => () => setPage(page)


    return <>{((): JSX.Element => {
        switch (page()) {
            case 'catalogue':
                return <Catalogue
                    items={allItems()}
                    addItem={addItemToCatalogue}
                    removeItem={removeItemFromCatalogue}
                    goToCreateShoppingList={goTo('createShoppingList')}
                />

            case 'createShoppingList':
                return <CreateShoppingList
                    availableItems={allItems()}
                    desiredItems={desiredItems()}
                    addDesiredItem={addDesiredItem}
                    removeDesiredItem={removeDesiredItem}
                    goBackToCatalogue={goTo('catalogue')}
                    goToStartShopping={goTo('shopping')}
                />
            case 'shopping':
                return <ShoppingList
                    desiredItems={desiredItems()}
                    collectedItems={collectedItems()}
                    checkItem={collectShoppingListItem}
                    uncheckItem={uncollectShoppingListItem}
                    goBackToCreateShoppingList={goTo('createShoppingList')}/>
        }
    })()}</>

};


export default Home;
