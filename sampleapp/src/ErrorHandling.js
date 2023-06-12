import { ErrorBoundary } from 'react-error-boundary';
import {useEffect,useState,useContext} from 'react';

function ErrorFallBackComponent(){
    return (
        <p> Oops something went wrong !!!!!</p>
    )
}
function Header() {
    const user = null;
    return <h1> Header Component {user?.name} </h1>
}
function MainComponent() {
    return <h1> Main Component </h1>
}
function SideBar() {
    return <h1> Side Bar Component </h1>
}
export function Footer() {
    return <h1> Footer Component </h1>
}
function ErrorHandling() {

    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallBackComponent}>
                <Header />
            </ErrorBoundary>
            <MainComponent />
            <SideBar />
            <Footer />
        </>
    )
}
export default ErrorHandling;