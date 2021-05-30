import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {

    return (
        <div className="meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) 
            {
                return (
                    <div key="index">
                        <div className= "definition">
                            {definition.definition}
                        <br/>
                        </div>
                        <div className="example">
                        <em>{definition.example}</em>
                        </div>

                        <Synonyms synonyms={definition.synonyms}/>

                </div>
            );
            })}
        </div>
);
}