import Button from '@restart/ui/esm/Button';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../share/hook/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let { user, isLoading } = UseAuth()
    if (isLoading) {
        return < Spinner animation="grow" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location }
                            }}
                        />
                    ))
            }
        />
    );
}


export default PrivateRoute;