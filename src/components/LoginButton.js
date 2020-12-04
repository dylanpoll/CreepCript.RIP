import React from 'react'
import { Nav } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <Nav.Item><Nav.Link onClick={() => loginWithRedirect()}>Log-In</Nav.Link></Nav.Item>
        )
    )
}
