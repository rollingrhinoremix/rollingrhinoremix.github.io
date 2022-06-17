import Footer from "../components/Footer"

// import contributors JSON
import contributors from "../../../JSON/Contributors.json"

// css
import "../../css/Info/Info.css"
import "../../css/general.css"

export default function InfoPage() {
    return (
        <div id="info">
            {/* spacer */}
            <div class="spacer"></div>

            {/* title */}
            <h1 id="info-title" class="gradient">Info</h1>

            {/* contributors */}
            <div id="info-contributors-section">
                {/* mini title */}
                <h1 class="info-contributors-title">Official Developers</h1>

                {/* flexbox container for contributors list */}
                <div id="info-contributors-container">
                    {/* iterate through list of imported contributors JSON file */}
                    <For each={contributors.developers}>
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
                                    <span>"{developer.description}"</span>
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
                                    <span>{contributor.description}</span>
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
            <div id="info-press-section">
                {/* mini title */}
                <h2 id="info-press-title">Press</h2>

                {/* text */}
                <p id="info-press-text">
                    This is a collection of press, posts, and articles regarding <b>Rolling Rhino Remix</b> <br></br>
                    
                    <br></br>

                    {/* flexbox container for links */}
                    <span id="info-press-text-link-container">
                        <span class="info-press-link">
                            • <a href="https://www.theregister.com/2022/03/29/rolling_release_ubuntu_remix/" target="_blank">The Register</a>
                        </span>

                        <br></br>

                        <span>
                            • <a href="https://www.zdnet.com/article/rolling-rhino-delivers-a-rolling-release-take-on-ubuntu-desktop/" target="_blank">ZDNet</a>
                        </span>

                        <br></br>

                        <span>
                            • <a href="https://fossbytes.com/ubuntu-rolling-release-rolling-rhino/" target="_blank">FOSSBYTES</a>
                        </span>

                        <br></br>

                        <span>
                            • <a href="https://retrology.net/rolling-rhino-converts-ubuntu-into-a-rolling-release/" target="_blank">Retrology</a>
                        </span>

                        <br></br>

                        <span>
                            • <a href="https://tuxdigital.com/podcasts/this-week-in-linux/twil-192/" target="_blank">Tuxdigital's "This Week in Linux 192"</a>
                        </span>

                        <br></br>

                        <span>
                            • <a href="http://lxer.com/module/newswire/view/313425/index.html" target="_blank">LXer</a>
                        </span>

                        <br></br>

                        <span>
                            • <a href="https://fullcirclemagazine.org/podcast/full-circle-weekly-news-256/" target="_blank">Full Circle Weekly News #256</a>
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