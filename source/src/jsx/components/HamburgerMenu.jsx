import Navbar from "./Navbar"
import { createSignal, Show } from "solid-js";

// css
import "../../css/components/Routing/HamburgerMenu.css"

export default function HamburgerMenu() {
    // create a signal for visibility
    const [visible, setVisible] = createSignal(false);

    // check if on desktop (landscape mode)
    const [onDesktop, setOnDesktop] = createSignal(() => {
        console.log(window.innerHeight > window.innerWidth)
        return window.innerHeight < window.innerWidth
    });

    // function called when closing the hamburger menu / navbar
    const setInvisible = () => {
        // set the outro animation
        document.getElementById("navlink-container").style.animation = "navbar-outro 0.2s";

        // set the opacity so it doesn't reappear for a split second
        document.getElementById("navlink-container").style.opacity = 0;

        // set outro animation for backgrounds
        document.getElementById("hamburger-bg").style.animation = "hamburger-bg-off 0.2s";

        // set opacity of hamburger background to 0
        document.getElementById("hamburger-bg").style.opacity = 0;

        // set up a timeout function that will run after 200 milliseconds (length of set animation)
        setTimeout(() => {
            setVisible(false); // call the signal setter and finally set to invisible
        }, 200);
    };

    return (
        <div id="hamburger-menu">
            {/* hamburger menu background */}
            <Show when={visible()}>
                <div id="hamburger-bg"></div>
            </Show>

            {/* actual hamburger menu button */}
            <button id="hamburger-button" onClick={() => {
                // lambda function
                if(!visible()) { // if not visible
                    setVisible(true); // just set as visible because upon creation intro animation is played
                }
                else { // else
                    setInvisible(); // call setInvisible() that handles the outro animation timed with the deletion of the navbar
                }
            }}>
                {/* hamburger lines */}
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
            </button>

            {/* import the navigation bar */}
            <Navbar visible={visible()} setInvisible={setInvisible}></Navbar>


        </div>
    )
}