import {Component} from "solid-js";

interface NavigationButtonProps {
    text: string
    direction: 'forward' | 'back'
    goToPage: () => void
}


const NavigationButton: Component<NavigationButtonProps> = (props: NavigationButtonProps) => {

    const createText = (): string => {
        switch (props.direction) {
            case 'forward':
                return props.text + ' →'
            case 'back':
                return '← ' + props.text
        }
    }

    return (
        <button
            class="navigation-button"
            onClick={props.goToPage}>
            {createText()}
        </button>
    )
}

export default NavigationButton
