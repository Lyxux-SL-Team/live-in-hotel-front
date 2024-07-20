import React, { Suspense, useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import LayoutClassic from '../layout/MainLayout/ClassicLayout'
import { routes } from './RouteList'
import { useSelector } from 'react-redux'

const AppRoutes = (props) => {
    const { match } = props;
    const user = useSelector(state => state.auth.user)
    const token = useSelector(state => state.auth.token)
 
        if (!user && !token) {
            return <Redirect to="/auth/signup" />
        }
    return (
        <Suspense
            fallback={
                <div className="preloader-it">
                    <div className="loader-pendulums" />
                </div>
            }>
            <LayoutClassic>
                <Switch>
                    {
                        routes.map((obj, i) => {
                            return (obj.component) ? (
                                <Route
                                    key={i}
                                    exact={obj.exact}
                                    path={match.path + obj.path}
                                    render={matchProps => (
                                        <obj.component {...matchProps} />
                                    )}
                                />) : (null)
                        })
                    }
                    <Route path="*">
                        <Redirect to="/error-404" />
                    </Route>
                </Switch>
            </LayoutClassic>
        </Suspense>
    )
}

export default AppRoutes
