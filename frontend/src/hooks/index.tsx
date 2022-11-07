import {
    ReactNode
} from 'react';

import { AssignmentProvider } from './assignment';
import { ToggleModalProvider } from './toggleModal';

interface AppProviderProps {
    children: ReactNode; 
}

function AppProvider({ children }: AppProviderProps) {
    return (
        <AssignmentProvider>
            <ToggleModalProvider>
                { children }
            </ToggleModalProvider>    
        </AssignmentProvider>
    )
}

export { AppProvider };