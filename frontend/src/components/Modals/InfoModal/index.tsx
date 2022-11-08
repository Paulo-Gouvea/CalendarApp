import { format } from "date-fns";
import { Container, Content } from "./styles";

import { useAssignment } from "../../../hooks/assignment";
import { useToggleInfoModal } from "../../../hooks/toggleInfoModal";

import { ModalButton } from "../../Buttons/ModalButton";

interface InfoModalProps {
    isOpen: boolean;
    closeOnClick: () => void;
}

export function InfoModal({
    isOpen,
    closeOnClick
}: InfoModalProps){
    if(isOpen) {
        const { selectedAssignment, deleteAssignment } = useAssignment();
        const { setIsInfoModalOpen } = useToggleInfoModal();

        const handleDeleteAssignment = () => {
            deleteAssignment.mutate(selectedAssignment);

            setIsInfoModalOpen((oldState) => !oldState)
        }

        return (
        <Container>
            <Content>
                <header>
                    <p>
                        CONFIGURAÇÕES DE TAREFA
                    </p>

                    <div
                        onClick={closeOnClick}
                    >
                        <p>
                            X
                        </p>
                    </div>
                </header>

                <section>
                    <div>
                        <p>TÍTULO</p>
                        <p>{selectedAssignment.title}</p>
                    </div>

                    <div>
                        <p>DESCRIÇÃO</p>
                        <p>{selectedAssignment.description}</p>
                    </div>

                    <div>
                        <p>INÍCIO DA TAREFA</p>
                        <p>{`${format(new Date(selectedAssignment.start), 'dd/MM/yyyy')} - ${format(new Date(selectedAssignment.start), 'HH:mm:ss')}`}</p>
                    </div>

                    <div>
                        <p>FINAL DA TAREFA</p>
                        <p>{`${format(new Date(selectedAssignment.end), 'dd/MM/yyyy')} - ${format(new Date(selectedAssignment.end), 'HH:mm:ss')}`}</p>
                    </div>
                </section>

                <footer>
                    <ModalButton 
                        onClick={handleDeleteAssignment}
                        title={'APAGAR TAREFA'}
                        buttonColor={'#ed3419'}
                    />

                    <ModalButton 
                        onClick={() => {}}
                        title={'ATUALIZAR TAREFA'}
                        buttonColor={'#0066ff'}
                    />
                </footer>
            </Content>
        </Container>
    )
    } else {
        return null;
    }
}