import { createContext, ReactNode, useContext, useState } from "react";
 
interface ToggleFormModalContextData {
    isFormModalOpen: boolean;
    setIsFormModalOpen:React.Dispatch<React.SetStateAction<boolean>>;
    handleFormModalToggle: () => void;
}
 
interface ToggleFormModalProviderProps {
   children: ReactNode;
}
 
export const ToggleFormModalContext = createContext({} as ToggleFormModalContextData);
 
function ToggleFormModalProvider({ children }: ToggleFormModalProviderProps){
    const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);

    const handleFormModalToggle = () => {
        setIsFormModalOpen(oldState => !oldState);
    }

   return (
       <ToggleFormModalContext.Provider value={{
        isFormModalOpen,
        setIsFormModalOpen,
        handleFormModalToggle
       }} >
           {children}
       </ToggleFormModalContext.Provider>
   )
}
 
function useToggleFormModal(){
   const context = useContext(ToggleFormModalContext);
 
   return context;
}
 
export { ToggleFormModalProvider, useToggleFormModal };