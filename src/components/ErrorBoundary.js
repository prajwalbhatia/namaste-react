import {useRouteError} from 'react-router-dom';

const ErrorBoundary = () => {
    const err = useRouteError();
    console.log('🚀 ~ Error ~ err:', err)
  return (
    <>
    <div>Oops! Something went wrong</div>
    <span>{err?.status}</span>
    <span>{err?.statusText}</span> 
    </>
  )
}

export default ErrorBoundary;