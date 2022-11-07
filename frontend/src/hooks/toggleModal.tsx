import { createContext, ReactNode, useContext, useState } from "react";
 
interface ToggleModalContextData {
    isOpen: boolean;
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
    handleToggle: () => void;
}
 
interface ToggleModalProviderProps {
   children: ReactNode;
}
 
export const ToggleModalContext = createContext({} as ToggleModalContextData);
 
function ToggleModalProvider({ children }: ToggleModalProviderProps){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOpen(oldState => !oldState);
    }

   return (
       <ToggleModalContext.Provider value={{
        isOpen,
        setIsOpen,
        handleToggle
       }} >
           {children}
       </ToggleModalContext.Provider>
   )
}
 
function useToggleModal(){
   const context = useContext(ToggleModalContext);
 
   return context;
}
 
export { ToggleModalProvider, useToggleModal };