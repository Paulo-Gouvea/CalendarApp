import { Container } from "./styles";

interface ModalButtonProps {
    onClick: () => void;
    title: string;
    buttonColor: string;
}

export function ModalButton({
    onClick,
    title,
    buttonColor
}: ModalButtonProps){
    return (
        <Container
            onClick={onClick}
            color={buttonColor}
        >
            <p>{title}</p>
        </Container>
    );
}