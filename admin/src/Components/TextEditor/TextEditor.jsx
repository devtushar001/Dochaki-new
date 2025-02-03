import React, { useState, useRef, useEffect, useContext } from 'react';
import JoditEditor from 'jodit-react';
import { DochakiContext } from '../../Context/DochakiContext';

const TextEditor = () => {
    const editor = useRef(null);
    const {content, setContent} = useContext(DochakiContext);
    

   

    return (
        <JoditEditor
        style={{fontFamily: "Arial"}}
            ref={editor}
            value={content}
            onBlur={newContent => setContent(newContent)} // Updates content on blur
        />
    );
};

export default TextEditor;
