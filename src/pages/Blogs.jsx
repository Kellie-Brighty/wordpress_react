import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const Blogs = () => {

    const [myBlogs, setMyBlogs] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:8080/api/get').then(res => {
            setMyBlogs(res.data);
            console.log(myBlogs);
        }).catch(err => { console.log(err.message) });
        return () => {
       setMyBlogs(null);
        };
    }, []);
   

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th> Author Name </th>
                        <th> Author title </th>
                    </tr>
                    
                            {myBlogs && myBlogs.map(item => ((
                               <tr key={item.id}>
                                    <td>{item.author_name}</td>
                                    <td>{item.title}</td>
                               </tr>
                            )))}
                    
                </thead>   
            </table>


        </>
    );
}

export default Blogs;