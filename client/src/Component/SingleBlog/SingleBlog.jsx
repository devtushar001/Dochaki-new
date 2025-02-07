import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DochakiContext } from "../../Context/DochakiContext";
import './SingleBlog.css';

const SingleBlog = () => {
    const { blogData } = useContext(DochakiContext);
    const [singleBlog, setSingleBlog] = useState(null);
    const { blogId } = useParams();

    useEffect(() => {
        const foundBlog = blogData.find((blog) => blog._id === blogId);

        if (foundBlog) {
            setSingleBlog(foundBlog);
        }
    }, [blogId, blogData]);

    return (
        <>
            <div className="single-blog">
                {singleBlog ? (
                    <div className="blog">
                        <h1>{singleBlog.title?.toUpperCase()}</h1>
                        <div dangerouslySetInnerHTML={{ __html: singleBlog.content }}></div>
                        <div className="gallery-images">
                            {singleBlog.gallery.map((item, i) => {
                                return (
                                    <img src={item} />
                                )
                            })}
                        </div>

                    </div>
                ) : (
                    <p>Loading or blog not found...</p>
                )}
            </div>
        </>
    );
};

export default SingleBlog;
