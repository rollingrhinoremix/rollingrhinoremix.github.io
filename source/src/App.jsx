import { Route, Routes } from "solid-app-router";
import { createSignal, Show } from "solid-js";
import { MetaProvider } from "@solidjs/meta"
import HamburgerMenu from "./jsx/components/HamburgerMenu";
import DesktopNavbar from "./jsx/components/DesktopNavbar";
import Branding from "./jsx/pages/Branding";
import DonatePage from "./jsx/pages/Donate";
import DownloadPage from "./jsx/pages/Download";
import Home from "./jsx/pages/Home";
import InfoPage from "./jsx/pages/Info";
import NewsPage from "./jsx/pages/News";
import PageNotFound from "./jsx/pages/PageNotFound";

// desktop/mobile navbar/hamburger changing code

/*
create signals

use lambda method when loading for first time to see if
in portrait or landscape mode and return boolean accordingly
*/
const [onDesktop, setOnDesktop] = createSignal(false);

// add an event listenter to resizing the screen, updates the signal
// with same functionality
window.addEventListener("resize", () => {
    if(window.innerHeight > window.innerWidth){
        setOnDesktop(false);
    }
    else {
        setOnDesktop(true);
    }
});

// run code to set desktop bool for first time
if(window.innerHeight > window.innerWidth) {
    setOnDesktop(false);
}
else {
    setOnDesktop(true);
}

function App() {
    return (
        <MetaProvider>
            <div id="app">
                {/* pages managed by the router */}
                <Routes id="router">
                    {/* home page */}
                    <Route path="/" element={<Home/>}/>

                    {/* download page */}
                    <Route path="/download" element={<DownloadPage/>}/>

                    {/* news page */}
                    <Route path="/news" element={<NewsPage/>}/>

                    {/* info page */}
                    <Route path="/info" element={<InfoPage/>}/>

                    {/* donate page */}
                    <Route path="/donate" element={<DonatePage/>}/>

                    {/* branding page */}
                    <Route path="/branding" element={<Branding/>}/>

                    {/* error 404 - page not found */}
                    <Route path="/:id" element={<PageNotFound/>}/>
                </Routes>

                {/*
                Show structure

                if on desktop (landscape mode) then show desktop navbar

                otherwise show hamburger menu
                */}
                <Show when={onDesktop()}
                fallback={
                    <HamburgerMenu></HamburgerMenu>
                }>
                    <DesktopNavbar></DesktopNavbar>
                </Show>

            </div>
        </MetaProvider>
    );
}

export default App;
