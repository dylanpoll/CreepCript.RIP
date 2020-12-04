import React from 'react'
import { Nav } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'

export const Logout = () => {
    const { logout , isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <Nav.Item><Nav.Link onClick={() => logout()}>Log-Out</Nav.Link></Nav.Item>
        )
    )
}