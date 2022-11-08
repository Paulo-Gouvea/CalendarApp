import { Container } from "./styles";

import { Sidebar } from "../Sidebar";
import { Calendar } from "../Calendar";

interface BodyProps {
    sidebarOnClick: () => void;
    calendarOnClick: () => void;
}

export function Body({
    sidebarOnClick,
    calendarOnClick
}: BodyProps){
    return (
        <Container>
            <Sidebar 
                createButtonOnClick={sidebarOnClick}
            />

            <Calendar 
                calendarOnClick={calendarOnClick}
            />
        </Container>
    )
}