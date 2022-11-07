import { Container, Wrapper } from "./styles";
import { CreateButton } from "../Buttons/CreateButton";
import { Picker } from "../Picker";

interface SidebarProps {
    createButtonOnClick: () => void;
}

export function Sidebar({
    createButtonOnClick
}: SidebarProps){
    return (
        <Container>
            <Wrapper>
                <CreateButton 
                    onClick={createButtonOnClick}
                />

                <Picker />
            </Wrapper>
        </Container>
    );
}