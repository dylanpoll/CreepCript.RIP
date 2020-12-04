import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated &&(
        <div>
            <img src={user.picture} alt={user.name}/>
            <h2>User Name : {user.name}</h2>
            <h2>E-Mail : {user.email}</h2>
            <h2>Last Login : {user.updated_at}</h2>
            <h2>Local : {user.locale}</h2>
            <h2>Auth0 ID : {user.sub}</h2>
            <h2>E-Mail Verified : {JSON.stringify(user.email_verified)}</h2>
        </div>
        )
    )
}
