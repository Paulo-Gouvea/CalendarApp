import { Body } from "../../components/Body";
import { Header } from "../../components/Header";
import { FormModal } from "../../components/Modals/FormModal";

import { useToggleModal } from "../../hooks/toggleModal";

export function MainPage(){
    const { isOpen, handleToggle } = useToggleModal();

    return (
        <>
            <Header />

            <Body 
                sidebarOnClick={handleToggle}
            />

            <FormModal 
                isOpen={isOpen}
                closeOnClick={handleToggle}
            />
        </>
    )
}