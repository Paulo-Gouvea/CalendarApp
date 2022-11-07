import { Container } from "./styles";

interface ModalButtonProps {
    onClick: () => void;
}

export function ModalButton({
    onClick
}: ModalButtonProps){
    return (
        <Container
            onClick={onClick}
        >
            <p>CRIAR TAREFA</p>
        </Container>
    );
}