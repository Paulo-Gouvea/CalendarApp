import { Body } from "../../components/Body";
import { Header } from "../../components/Header";
import { FormModal } from "../../components/Modals/FormModal";
import { InfoModal } from "../../components/Modals/InfoModal";

import { useToggleFormModal } from "../../hooks/toggleFormModal";
import { useToggleInfoModal } from "../../hooks/toggleInfoModal";

export function MainPage(){
    const { isFormModalOpen, handleFormModalToggle } = useToggleFormModal();
    const { isInfoModalOpen, handleInfoModalToggle } = useToggleInfoModal();

    return (
        <>
            <Header />

            <Body 
                sidebarOnClick={handleFormModalToggle}
                calendarOnClick={handleInfoModalToggle}
            />

            <FormModal 
                isOpen={isFormModalOpen}
                closeOnClick={handleFormModalToggle}
            />

            <InfoModal 
                isOpen={isInfoModalOpen}
                closeOnClick={handleInfoModalToggle}
            />
        </>
    )
}