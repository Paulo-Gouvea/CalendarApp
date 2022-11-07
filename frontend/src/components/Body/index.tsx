import { Container } from "./styles";

import { Sidebar } from "../Sidebar";
import { Calendar } from "../Calendar";

interface BodyProps {
    sidebarOnClick: () => void;
}

export function Body({
    sidebarOnClick
}: BodyProps){
    return (
        <Container>
            <Sidebar 
                createButtonOnClick={sidebarOnClick}
            />

            <Calendar />
        </Container>
    )
}