import { Route, Routes } from "solid-app-router";
import HamburgerMenu from "./jsx/components/HamburgerMenu";
import BrandingPage from "./jsx/pages/BrandingPage";
import DonatePage from "./jsx/pages/DonatePage";
import DownloadPage from "./jsx/pages/Download";
import HomePage from "./jsx/pages/Home";
import InfoPage from "./jsx/pages/Info";
import NewsPage from "./jsx/pages/News";
import PageNotFound from "./jsx/pages/PageNotFound";

function App() {
    return (
        <div>
            {/* pages managed by the router */}
            <Routes id="router">
                {/* home page */}
                <Route path="/" element={<HomePage/>}/>

                {/* download page */}
                <Route path="/download" element={<DownloadPage/>}/>

                {/* news page */}
                <Route path="/news" element={<NewsPage/>}/>

                {/* info page */}
                <Route path="/info" element={<InfoPage/>}/>

                {/* donate page */}
                <Route path="/donate" element={<DonatePage/>}/>

                {/* branding page */}
                <Route path="/branding" element={<BrandingPage/>}/>

                {/* error 404 - page not found */}
                <Route path="/:id" element={<PageNotFound/>}/>
            </Routes>

            {/* hamburger menu */}
            <HamburgerMenu></HamburgerMenu>

        </div>
    );
}

export default App;
