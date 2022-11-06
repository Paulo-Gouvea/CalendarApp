import { Container, Wrapper } from "./styles";
import { CreateButton } from "../Buttons/CreateButton";
import { Picker } from "../Picker";

export function Sidebar(){
    return (
        <Container>
            <Wrapper>
                <CreateButton />

                <Picker />
            </Wrapper>
        </Container>
    );
}