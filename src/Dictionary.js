import React, {useState} from "react";
import axios from "axios";
import Results from"./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){

        // console.log(response.data[0]);
        setResults(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0]);

    }
    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        // console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
  
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
            
        </div>
    )
    } else {
        load();
        return "Loading";
    }
}