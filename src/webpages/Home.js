import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Indent, SmallText, HeaderText, PageTitleText} from "../components/Layout";


export const Title = () => {
    const { isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <PageTitleText>Under Development</PageTitleText>
        )
    )
}

export const NewGreeting = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
                <PageTitleText>Hi {user.name}! </PageTitleText>
            </div>
        )
    )
}

export const Home = () => (
    <div style={{ width: "100%"}}>
            <PageTitleText>Under Development{'\n'}{'\n'}</PageTitleText>
        <Indent>
        <HeaderText>About CreepCript.RIP</HeaderText>
            <Indent>
                <SmallText>I have a friend who is and has been stalked online for a long time. 
                    This project is dedicated to that friend and meant to help people who are being harrased in that same way.{'\n'}
                {'\n'}The project can accomplish :
                    <ul>
                        <li><span>Injection of metadata(exif data codes meant to be used for tracking suspect leads)</span></li>
                        <li><span>Image Stegnography as a means to inject a tracking code to bypass exif data scrubbers</span></li>
                        <li><span>An easy deploment system ( so you can host a site that will post images that will automatically display tagged images for the user connected.)</span></li>
                        <li><span>A phone App</span></li>
                        <li><span>Archival for people to codes used only accessable after authenticating using Auth0.</span></li>
                        <li><span>And more.(site is under development, but the backend is almost done.)</span></li>
                    </ul>
                </SmallText>
            </Indent>
            
        </Indent>

    </div>
);
/*
                    <ul>
                        <li><span>    </span></li>
                    </ul>
*/

