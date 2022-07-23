// subsection vars
var SubsectionAmount = 0;

// JSON generation vars
var GeneratedJSON = false; // generated JSON at least once
var JSONText = ``;

// get all DOM nodes
var Subsections;
var SubsectionCounter;

var LinkTextInput;
var LinkURLInput;
var OutputLink;

var JSONOutput;
var JSONCopyButton;

// all input fields
var TitleInput;
var DateInput;
var ContentInput;
var PostIDInput;


// add a subsection
function AddSub() {
    // add to amount of subsections
    SubsectionAmount++;

    // reset text of subsection counter to be accurate
    SubsectionCounter.innerHTML = "Subsections: " + SubsectionAmount;

    // append a child to the subsections container and enter a newly created div as the parameter
    Subsections.appendChild(
        document.createElement("div") // set the div's innerHTML to some elements that will lay out the template for a subsection
    ).innerHTML = "\
        <h3>Subsection " + SubsectionAmount + "</h3>\
        \
        <p>Title</p>\
        <input type='text'>\
        \
        <br>\
        \
        <p>Content</p>\
        <textarea></textarea>\
    ";
}

// remove a subsection
function SubtractSub() {
    // if subsection amount is more than
    if(SubsectionAmount > 0) {
        // add to amount of subsections
        SubsectionAmount--;

        // reset text of subsection counter to be accurate
        SubsectionCounter.innerHTML = "Subsections: " + SubsectionAmount;

        Subsections.removeChild(Subsections.lastChild);
    }
}

// generate link text
function GenerateLink() {
    OutputLink.innerText = 
        "<a href='" + LinkURLInput.value 
        + "' target='_blank'>"
        + LinkTextInput.value 
        + "</a>";
}

function GenerateJSON() {
    // total
    let sections = ""

    let sectionObjects = Subsections.children;

    // iterate thru subsection amount
    for(i = 0; i < SubsectionAmount; i++) {

        indexedSubsectionChildren = sectionObjects[i].children;

        sections += `
        {
            "title": "${indexedSubsectionChildren[2].value}",

            "paragraph": "${ProcessParagraph(indexedSubsectionChildren[5].value)}"
        }`

        // if next index is still less than subsection amount
        if(i+1 < SubsectionAmount) {
            sections += ","; // add comma for next section
        }
    }
    
    // processed version
    JSONText = `\
{
    "id": "${PostIDInput.value}",

    "title": "${TitleInput.value}",

    "date": "${DateInput.value}",

    "paragraph": "${ProcessParagraph(ContentInput.value)}",
    
    "sections": [${sections}
    ]
},`

    // set JSON output to show newly generated JSON
    JSONOutput.innerHTML = `<pre>${JSONText}</pre>`

    JSONCopyButton.disabled = false;
}

// process paragraph text and return newly processed version
function ProcessParagraph(paragraph) {
    return paragraph
        // replace all new lines with <br> using regex
        .replaceAll(/(?:\r\n|\r|\n)/g, "&ltbr&gt")

        // replace &bull with actual bullet points
        .replaceAll("&bull", "•")

        // replace aliases for code blocks with actual code for them (bl$ $bl)
        .replaceAll("c$", "<span class='code'>")
        .replaceAll("$c", "</span>")

        // replace aliases for bold with actual bold text (b$ $b)
        .replaceAll("b$", "<b>")
        .replaceAll("$b", "</b>")

        // replace aliases for italic with actual italic text (i$ $i)
        .replaceAll("i$", "<i>")
        .replaceAll("$i", "</i>")

        // replace aliases for underlined with actual underlined text (u$ $u)
        .replaceAll("u$", "<u>")
        .replaceAll("$u", "</u>")

        // replace aliases for strikethru with actual strikethru text (s$ $s)
        .replaceAll("s$", "<s>")
        .replaceAll("$s", "</s>")

        // replace aliases for quotations with actual quote text (q$ $q)
        .replaceAll("q$", "<q>")
        .replaceAll("$q", "</q>")

        // escape < > characters so they still show properly
        .replaceAll("<", "&lt")
        .replaceAll(">", "&gt");
}

// copy the contents of the generated json
function CopyJSON() {
    // copy to clipboard JSON text but return escaped < and > characters
    navigator.clipboard.writeText(JSONText
        .replaceAll("&lt", "<")
        .replaceAll("&gt", ">"))
}