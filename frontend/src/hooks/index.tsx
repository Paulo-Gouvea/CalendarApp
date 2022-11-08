import {
    ReactNode
} from 'react';

import { AssignmentProvider } from './assignment';
import { ToggleFormModalProvider } from './toggleFormModal';
import { ToggleInfoModalProvider } from './toggleInfoModal';

interface AppProviderProps {
    children: ReactNode; 
}

function AppProvider({ children }: AppProviderProps) {
    return (
        <AssignmentProvider>
            <ToggleFormModalProvider>
                <ToggleInfoModalProvider>
                    { children }
                </ToggleInfoModalProvider>
            </ToggleFormModalProvider>    
        </AssignmentProvider>
    )
}

export { AppProvider };