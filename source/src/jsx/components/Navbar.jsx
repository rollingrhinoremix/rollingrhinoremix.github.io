import { NavLink } from "solid-app-router";

// css
import "../../css/components/Routing/Navbar.css"
import "../../css/components/Routing/NavLinks.css"

export default function Navbar(props) {
    // take props from parent (hamburger menu)

    return (
        <div id="navbar">
            {/* logo - leads back to the home page */}
            <NavLink id="navbar-logo" href="/">
                <img src="assets/logo.png"></img>
            </NavLink>


            {/* show this when visible, getter passed in as a prop */}
            <Show when={props.visible}>
                {/* actual navbar */}
                <div id="navlink-container">
                    {/* home route */}
                    <NavLink class="navlink" end href="/" onclick={() => {props.setInvisible()}}>Home</NavLink>

                    {/* download route */}
                    <NavLink class="navlink" end href="/download" onclick={() => {props.setInvisible()}}>Download</NavLink>

                    {/* anchor to wiki page - NOT A ROUTE because it sends user to an external website, also open to new tab just for convenience */}
                    <a class="navlink inactive" href="https://github.com/rollingrhinoremix/docs/wiki" target="_blank">
                        Wiki
                        <img id="navlink-wiki-image" src="assets/external-link.png"></img>
                    </a>

                    {/* news route */}
                    <NavLink class="navlink" end href="/news" onclick={() => {props.setInvisible()}}>News</NavLink>
                </div>
            </Show>
        </div>
    )
}