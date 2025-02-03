import React, { useContext, useState } from "react";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import TextEditor from "../../Components/TextEditor/TextEditor";
import { DochakiContext } from "../../Context/DochakiContext";
import './AddItem.css';

const AddItem = () => {
    const { content, imageData } = useContext(DochakiContext);

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", width: "100vw", flexDirection: "column" }} className="add-item">
                <ImageUploader />
                <div className="show-image-data">
                    {imageData.map((item, i) => {
                        return (
                            <div className="single-img" key={i}>
                                <img src={item} alt="" />
                                <p>{item}</p>
                            </div>
                        )
                    })}
                </div>
                <div style={{ display: "flex", alignItems: "center", width: "100vw", flexDirection: "column" }} className="main-content">
                    <div style={{ width: "80vw" }} className="content-editor">
                        <TextEditor />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddItem;