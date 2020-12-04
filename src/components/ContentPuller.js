import React, { useState, useEffect } from 'react';
import { SmallText, HeaderText } from "./Layout";

const url = 'http://express.DevDylan.me/';

export function Submit(){
    const submit = async (data) => {
        try {
        const response = await fetch(url + `submit/${data}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });//calls the .env for the url being used body data type must match "Content-Type" header
        return response.json(); // parses JSON response into native JavaScript objects
        } catch{
        console.log("error");
        }
    }
    return submit;
}

export function getContentbyParam ({ match }) { 
    const Content = async () => {//this pulls from our express to our database
        const fetchcontent = await fetch(url+`content/${match.params._id}`, { method: 'GET' });
        const content = await fetchcontent.json();
        return(content);
        }
    return Content;
}

export function getContentByVal (body) { 
    const Content = async () => {//this pulls from our express to our database
        const fetchcontent = await fetch(url+`content/${body}`, { method: 'GET' });
        const content = await fetchcontent.json();
        return(content);
        }
    return Content;
}

export function LoadProject({ match }) {
    //linking to this with the params ID we get access with Match.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchContent(); }, []);
    const fetchContent = async () => {//this pulls from our express to our database
        const fetchcontent = await fetch(url+`content/${match.params._id}`, { method: 'GET' });
        const content = await fetchcontent.json();
        setContent(content);
    }

    const [content, setContent] = useState({});
    return (
        <div>
            <HeaderText>
                {content.ProjectTitle} :
            </HeaderText>
            <SmallText>
                Karma : {content.karma}
                Level : {content.level}
                roles : {content.roles}
            </SmallText>
        </div>
    );
}