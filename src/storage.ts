import {AllItems} from "./models";

const ALL_ITEMS_KEY = 'allItems';

const getAllItems = (): AllItems => {
    const items: string | null = localStorage.getItem(ALL_ITEMS_KEY)
    if (items === null) {
        return []
    }
    let parsed = JSON.parse(items);
    if (!Array.isArray(parsed) || !parsed.every((item: unknown) => typeof item === 'string')) {
        console.error(`Expected an array of strings but got ${JSON.stringify(parsed)} - resetting ${ALL_ITEMS_KEY}`)
        localStorage.removeItem(ALL_ITEMS_KEY)
        return []
    }
    return parsed
}

const saveAllItems = (items: AllItems): void => {
    localStorage.setItem(ALL_ITEMS_KEY, JSON.stringify(items))
}

const addItem = (item: string): AllItems => {
    const updated = getAllItems().concat(item).sort()
    saveAllItems(updated)
    return updated
}

const removeItem = (item: string): AllItems => {
    const updated = getAllItems().filter(i => i !== item)
    saveAllItems(updated)
    return updated
}

export {getAllItems, addItem, removeItem}