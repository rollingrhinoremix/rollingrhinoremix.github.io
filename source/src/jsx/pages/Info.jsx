import Footer from "../components/Footer"

// metadata
import { Title } from "@solidjs/meta"

// import contributors JSON
import contributors from "../../../JSON/Contributors.json"

// css
import "../../css/Info/Info.css"
import "../../css/general.css"
import {For} from "solid-js";

// title string
const pageTitle = "Rolling Rhino Remix | Information";

export default function InfoPage() {
    return (
        <div id="info" class="page-width">
            {/* metadata */}
            <Title>{pageTitle}</Title>

            {/* spacer */}
            <div class="large-spacer"></div>

            {/* title */}
            <h1 id="info-title" class="gradient">Rolling Rhino Remix - Information</h1>
            <hr class={"header-hr"}/>

            {/* contributors */}
            <div id="info-contributors-section" class="card">
                {/* mini title */}
                <h1 class="info-contributors-title">Core contributors</h1>

                {/* flexbox container for contributors list */}
                <div id="info-contributors-container">
                    {/* iterate through list of imported contributors JSON file */}
                    <For each={contributors.coreContributors}>
                        {/* lambda JSX equation returns instance of contributor element with filled out data */}
                        {(developer) => {
                            return (
                                <p class="info-contributor">
                                    {/* name */}
                                    <a href={developer.ghLink} target="_blank">
                                        {developer.name}
                                    </a>

                                    <br></br> {/* break line */}

                                    {/* description */}
                                    {() => {
                                        // create span
                                        const span = document.createElement("span");

                                        // set innerHTML to description wrapped in quotes
                                        span.innerHTML = developer.description;

                                        // return it
                                        return span;
                                    }}
                                </p>
                            )
                        }}
                    </For>

                    {/* spacer */}
                    <div class="spacer"></div>

                    {/* another mini title lol */}
                    <h1 class="info-contributors-title">Contributors</h1>

                    {/* iterate through list of imported contributors JSON file */}
                    <For each={contributors.contributors}>
                        {/* lambda JSX equation returns instance of contributor element with filled out data */}
                        {(contributor) => {
                            return (
                                <p class="info-contributor">
                                    {/* name */}
                                    <a href={contributor.ghLink} target="_blank">
                                        {contributor.name}
                                    </a>

                                    <br></br> {/* break line */}

                                    {/* description */}
                                    {() => {
                                        // create span
                                        const span = document.createElement("span");

                                        // set innerHTML to description wrapped in quotes
                                        span.innerHTML = contributor.description;

                                        // return it
                                        return span;
                                    }}
                                </p>
                            )
                        }}
                    </For>

                    {/* title again */}
                    <h1 class="info-contributors-title">Fixed spelling mistakes & typos</h1>

                    {/* iterate through list of imported contributors JSON file */}
                    <For each={contributors.spelling}>
                        {/* lambda JSX equation returns instance of contributor element with filled out data */}
                        {(sContributor) => {
                            return (
                                <p class="info-spelling-contributor">
                                    {sContributor}
                                </p>
                            )
                        }}
                    </For>

                </div>

                {/* mini spacer */}
                <div class="mini-spacer"></div>
            </div>
            
            {/* spacer */}
            <div class="spacer"></div>

            {/* press */}
            <div id="info-press-section" class="card">
                {/* mini title */}
                <h2 id="info-press-title">Press</h2>

                {/* text */}
                <p id="info-press-text">
                    This is a collection of press, posts, and articles regarding <b>Rolling Rhino Remix.</b> <br></br>
                    
                    <br></br>

                    {/* flexbox container for links */}
                    <span id="info-press-text-link-container">

                        <span class="info-press-link">
                            • <a class="paragraph-link" href="https://www.theregister.com/2022/03/29/rolling_release_ubuntu_remix/" target="_blank">The Register</a>
                        </span>

                        <br></br>

                        <span>
                            • <a class="paragraph-link" href="https://www.zdnet.com/article/rolling-rhino-delivers-a-rolling-release-take-on-ubuntu-desktop/" target="_blank">ZDNet</a>
                        </span>

                        <br></br>

                        <span>
                            • <a class="paragraph-link" href="https://fossbytes.com/ubuntu-rolling-release-rolling-rhino/" target="_blank">FOSSBYTES</a>
                        </span>

                        <br></br>

                        <span>
                            • <a class="paragraph-link" href="https://retrology.net/rolling-rhino-converts-ubuntu-into-a-rolling-release/" target="_blank">Retrology</a>
                        </span>

                        <br></br>

                        <span>
                            • <a class="paragraph-link" href="https://tuxdigital.com/podcasts/this-week-in-linux/twil-192/" target="_blank">Tuxdigital's "This Week in Linux 192"</a>
                        </span>

                        <br></br>

                        <span>
                            • <a class="paragraph-link" href="http://lxer.com/module/newswire/view/313425/index.html" target="_blank">LXer</a>
                        </span>

                        <br></br>

                        <span>
                            • <a class="paragraph-link" href="https://fullcirclemagazine.org/podcast/full-circle-weekly-news-256/" target="_blank">Full Circle Weekly News #256</a>
                        </span>

                    </span>
                </p>
            </div>

            {/* spacer */}
            <div class="spacer"></div>

            {/* instance footer */}
            <Footer></Footer>
        </div>
    )
}