import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
      padding: "0px 100px",
      position: "relative",
    },
    searchBox: {
      background: "#7D41E1",
      height: 170,
      borderRadius: 30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    blogText: {
      fontFamily: theme.typography.caption,
      color: theme.palette.primary.white,
      fontSize: 30,
      fontWeight: "bold",
    },
    searchDiv: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      top: "100%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: theme.palette.primary.white,
      height: 62,
      width: 600,
      boxShadow: "0 0 20px 10px #0000001b",
      borderRadius: 15,
      paddingLeft: 30,
    },
    searchIcon: {
      fontSize: 25,
    },
    input: {
      outline: "none",
      height: "100%",
      width: "100%",
      border: "none",
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      paddingLeft: 30,
      fontSize: 20,
      fontFamily: theme.typography.fontFamily,
    },
  }));
  
  

const Blogs = () => {
    const classes = useStyles();


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
        <div className="blogss">
            <table >
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


        </div>
    );
}

export default Blogs;