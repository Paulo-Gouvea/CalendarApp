import { Container } from "./styles";

import { Sidebar } from "../Sidebar";
import { Content } from "../Content";

export function Body(){
    return (
        <Container>
            <Sidebar />

            <Content />
        </Container>
    )
}