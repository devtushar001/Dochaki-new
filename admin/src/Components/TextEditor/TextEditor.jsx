import React, { useState, useRef, useEffect, useContext } from 'react';
import JoditEditor from 'jodit-react';
import { DochakiContext } from '../../Context/DochakiContext';

const TextEditor = () => {
    const editor = useRef(null);
    const { content, setContent } = useContext(DochakiContext);

    return (
        <div style={{fontFamily: 'Arial', height: "65vh"}}>
            <JoditEditor
                ref={editor}
                value={content}
                onBlur={newContent => setContent(newContent)} // Updates content on blur
            />
        </div>
    );
};

export default TextEditor;
