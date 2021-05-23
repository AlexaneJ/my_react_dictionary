import React, {useState} from "react";
import axios from "axios";
import Results from"./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){

        // console.log(response.data[0]);
        setResults(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0]);

    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition...`);

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        // console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} placeholder="Enter a word..."/>
            </form>
            <Results results={results}/>
        </div>
    )
}