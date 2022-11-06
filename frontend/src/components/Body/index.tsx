import { Container } from "./styles";

import { Sidebar } from "../Sidebar";
import { Calendar } from "../Calendar";

export function Body(){
    return (
        <Container>
            <Sidebar />

            <Calendar />
        </Container>
    )
}