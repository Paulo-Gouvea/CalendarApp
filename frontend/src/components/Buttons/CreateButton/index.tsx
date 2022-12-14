import { Container } from "./styles";

interface CreateButtonProps {
    onClick: () => void;
}

export function CreateButton({
    onClick
}: CreateButtonProps){
    return (
        <Container
            onClick={onClick}
        >
            <div>
                +
            </div>

            <p>Criar</p>
        </Container>
    );
}