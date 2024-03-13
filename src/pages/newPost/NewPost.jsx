import {useState} from "react";
import "./newPost.css"
import Button from "../../components/button/Button.jsx";
import {createNewDateStamp} from "../../helpers/createNewDateStamp.js";
import {calcReadTime} from "../../helpers/calcReadTime.js";


function NewPost() {
    // const initialContent = ""
    // const initialReadTime = calcReadTime(initialContent)

    //useState om de date in op te slaan. Hieronder is de useState opgezet om alle onderdelen van het formulier in te verzamelen
    let [newBlogState, setNewBlogState] = useState( {
        author: "",
        title: "",
        subtitle: "",
        content: "",
        created: createNewDateStamp(),
        readTime: 0,
        comments: 0,
        shares: 0
    })
    //


    // handleChange komt in inputveld als onChange-handler. 'e' staat voor 'event', ofwel veranderingen in het inputveld
    function handleChange(e) {
        console.log("event", e.target)
        const changedFieldName = e.target.name
        //e.target.name verwijst naar de name attribuut van de input-velden.
        //Hierin willen we de nieuwe waarde (value) opslaan. Omdat een objectkey geen punt mag bevatten wordt deze hernoemt tot changedFieldName.

        //Onderstaande variabele zorgt ervoor dat de readTime alleen wordt berekend over de inhoud van de content.
        let newReadTime = newBlogState.readTime;
            if (e.target.name === 'content'){
            newReadTime = calcReadTime(e.target.value)
        }

        // let newReadTime = calcReadTime(e.target.value)

        setNewBlogState( {
            //spread operator zorgt dat alle properties worden gekopieerd en dus meegenomen in het aangepaste formulier
            ...newBlogState,
            //blokhaak syntax om 'changedFieldName' om variabele als object-key te kunnen gebruiken, zodat deze uiteindelijk terugverwijst naar de naam en niet letterlijk 'changedFieldName' genoemd wordt
            [changedFieldName]: e.target.value,

            readTime: newReadTime
        })
    }
    // const {author, title, subtitle, content, created, readTime, comments, shares} =newBlogState

    // De const hierboven deconstruct de verschillende onderdelen van 'newBlogState' en maakt het mogelijk andere functies en variabelen mee te geven in de 'handelSubmit'
    function handleSubmit(e) {
        e.preventDefault(); // voorkomt dat default actie van submit-button (reset) niet wordt uitgevoerd
        console.log( newBlogState)
    }

    return (
        <>
            <fieldset className="new-blog-wrapper">
                <legend><h2>Schrijf zelf een nieuw blog</h2></legend>
                <form className="new-blog-form">
                <label htmlFor="author">Naam:</label>

                    <input
                        id="author"
                        type="text"
                        name="author"
                        value={newBlogState.author}
                        onChange={handleChange}
                    />

                <label htmlFor="title">Titel:</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={newBlogState.title}
                        onChange={handleChange}
                    />

                <label htmlFor="subtitle">Ondertitel:</label>
                    <input
                        id="subtitle"
                        type="text"
                        name="subtitle"
                        value={newBlogState.subtitle}
                        onChange={handleChange}
                    />

                <label htmlFor="content">Jouw verhaal:</label>
                    <textarea
                        id="content"
                        name="content"
                        minLength="100"
                        maxLength="3000"
                        rows="10"
                        value={newBlogState.content}
                        onChange={handleChange}
                    />

                    <Button btnType="submit" handleClick={handleSubmit} btnName="Plaats jou blog" />
                </form>
            </fieldset>
        </>
    );
}

export default NewPost;