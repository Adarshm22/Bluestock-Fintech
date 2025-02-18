import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from './context/authContext.jsx'
import { IpoContextProvider } from './context/ipoContext.jsx'

createRoot(document.getElementById('root')).render(

    <AuthContextProvider>
        <IpoContextProvider>
            <App />
            <Toaster
                position="top-right"
            />
        </IpoContextProvider>
    </AuthContextProvider>

)
