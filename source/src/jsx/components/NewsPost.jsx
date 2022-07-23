// css
import "../../css/News/NewsPost.css"
import "../../css/general.css"

export default function NewsPost(props) {


    // get objects from props

    // id
    const propID = props.propID;

    // date
    const date = props.date;

    // title
    const title = props.title;

    // paragraph
    const paragraph = props.paragraph;

    // array of sections
    // each section has a "title" and "paragraph" propertys
    const sections = props.sections;

    // copy post link to clipboard
    const copyPostToClipboard = () => { // lambda
        navigator.clipboard.writeText(
            window.location.hostname +
            "/news#" +
            propID
        );

        // set showing to true
        props.setShowingPopup(true);

        // set showing to true to show the "copied to clipboard" message popup
        setTimeout(() => {
            props.setShowingPopup(false);
        }, 1000);
    }

    return (
        <div id={propID} class="news-post">
            {/* small banner thing */}
            <div class="news-post-banner"></div>

            {/* title and date */}
            <h1 class="news-post-title gradient">{title}</h1>

            <h4 class="news-post-date">{date}</h4>

            {/* main paragraph */}
            {() => {
                // parse string to document type
                var parsedToDOM = new DOMParser().parseFromString(paragraph, "text/html");

                // get child nodes (just text and anchors) from the body
                var text = Array.from(parsedToDOM.body.childNodes)

                // return text wrapped in paragraph tag
                return <p class="news-post-paragraph-text">{text}</p>;
            }}

            {/* For element iterates thru every section */}
            <For each={sections}>
                {(section) => 
                    <div>
                        <h2>{section.title}</h2>
                        {() => {
                            // parse string to document type
                            var parsedToDOM = new DOMParser().parseFromString(section.paragraph, "text/html");

                            // get child nodes (just text and anchors) from the body
                            var text = Array.from(parsedToDOM.body.childNodes)

                            // return text wrapped in paragraph tag
                            return <p class="news-post-paragraph-text">{text}</p>;
                        }}
                    </div>
                }
            </For>

            {/* share post button */}
            <button class="news-post-share-button" onClick={copyPostToClipboard}>
                <img src="./assets/share-icon.svg" alt="share" title="Share Post"/>
            </button>
        </div>
    )
}