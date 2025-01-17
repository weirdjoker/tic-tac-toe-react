import React from "react";

class ErrorBoundary extends React.Component{
    constructor (props) {
        super (props);    
    this.state = {hasError : false}
    }
    static getDerivedStateFromError (error){
        //update state so the next render will show the fallback UI
     return {hasError: true};
    }

    componentDidCatch(error, errorInfo){
        //you can also log the error to aon error reporting service
        console.error ('ErrorBoundary caught an error', error,errorInfo);
    }
    render () {
        if (this.state.hasError){
            //you can render any custom fallback UI
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }


}
export default  ErrorBoundary;
