import {
    ReactNode
} from 'react';

import { AssignmentProvider } from './assignment';

interface AppProviderProps {
    children: ReactNode; 
}

function AppProvider({ children }: AppProviderProps) {
    return (
        <AssignmentProvider>
            { children }
        </AssignmentProvider>
    )
}

export { AppProvider };