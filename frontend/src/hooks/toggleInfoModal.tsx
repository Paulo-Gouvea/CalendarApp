import { createContext, ReactNode, useContext, useState } from "react";
 
interface ToggleInfoModalContextData {
    isInfoModalOpen: boolean;
    setIsInfoModalOpen:React.Dispatch<React.SetStateAction<boolean>>;
    handleInfoModalToggle: () => void;
}
 
interface ToggleInfoModalProviderProps {
   children: ReactNode;
}
 
export const ToggleInfoModalContext = createContext({} as ToggleInfoModalContextData);
 
function ToggleInfoModalProvider({ children }: ToggleInfoModalProviderProps){
    const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);

    const handleInfoModalToggle = () => {
        setIsInfoModalOpen(oldState => !oldState);
    }

   return (
       <ToggleInfoModalContext.Provider value={{
        isInfoModalOpen,
        setIsInfoModalOpen,
        handleInfoModalToggle
       }} >
           {children}
       </ToggleInfoModalContext.Provider>
   )
}
 
function useToggleInfoModal(){
   const context = useContext(ToggleInfoModalContext);
 
   return context;
}
 
export { ToggleInfoModalProvider, useToggleInfoModal };