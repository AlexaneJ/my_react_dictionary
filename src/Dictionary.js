import React, {useState} from "react";
import axios from "axios";
import Results from"./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response){

        // console.log(response.data[0]);
        setResults(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0]);

    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }
    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        // console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f91700001000001f213de7926b442d190675ef28b162d7e";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {Authorization:`Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        //event.preventDefault;
        search();
      }

    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if(loaded) {
    return (
        <div className="Dictionary">
            <section>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} placeholder="Enter a word..."/>
            </form>
            <div className="hint">
                suggested words : sunset, cat, book, etc.
            </div>
            </section>
            <Results results={results}/>
            <Photos photos = {photos}/>
        </div>
    )
    } else {
        load();
        return "Loading";
    }
}