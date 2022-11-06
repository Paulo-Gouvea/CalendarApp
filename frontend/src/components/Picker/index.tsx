import { useState } from "react";
import { Container } from "./styles"
import DatePicker from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';

import "react-datepicker/dist/react-datepicker.css"

export function Picker(){
    const [date, setDate] = useState(new Date());

    return (
        <Container>
            <DatePicker 
                selected={date}
                onChange={(date: Date) => {setDate(date)}}
                inline
                locale={ptBR}
            />
        </Container>
    )
}