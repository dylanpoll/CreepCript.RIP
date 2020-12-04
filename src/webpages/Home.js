import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Indent, SmallText, HeaderText, PageTitleText } from "../components/Layout";

export const Greeting = () => {
    const { isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <PageTitleText>Welcome to CreepCript.RIP</PageTitleText>
        )
    )
}
export const NewGreeting = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated &&(
            <div>
                <PageTitleText>Welcome Back {user.name}! </PageTitleText>
            </div>
            )
    )
}

export const Home = () => (
    <div>
        <NewGreeting />
        <Greeting />
        <Indent>
            <HeaderText>About CreepCript.RIP :</HeaderText>
            <Indent>
                <SmallText>
                    I have a friend who is and has been stalked online for a long time, this project is meant to help people who are being harrased in that same way.
                    {'\n'}The project can accomplish :
                </SmallText>
                <Indent>
                    <SmallText>
                        * Injection of metadata(exif data codes meant to be used for tracking suspect leads)
                        {'\n'}* Image Stegnography as a means to inject a tracking code to bypass exif data scrubbers
                        {'\n'}* An easy deploment system( so you can host a site that will post images that will automatically display tagged images for the user connected.)
                        {'\n'}* A phone App
                        {'\n'}* Archival for people to codes used only accessable after authenticating using Auth0.
                        {'\n'}* And more.(site is under development, but the backend is almost done.)
                    </SmallText>
                </Indent>
            </Indent>
        </Indent>

        <Indent>
            <HeaderText>Contact Me (Developer) :{'\n'}</HeaderText>
                <Indent>
                    <SmallText>
                        E-Mail : <a href="DylanManPoll@gmail.com">DylanManPoll@gmail.com</a>
                        {'\n'}GitHub : <a href="https://github.com/dylanpoll"> https://github.com/dylanpoll </a>
                        {'\n'}LinkdIn : <a href="https://www.linkedin.com/in/dylan-poll-4a324a1a2/">https://www.linkedin.com/in/dylan-poll-4a324a1a2/</a>
                        {'\n'}My Website : <a href="https://devdylan.me">https://devdylan.me</a>
                    </SmallText>
                </Indent>
        </Indent>
    </div>
);