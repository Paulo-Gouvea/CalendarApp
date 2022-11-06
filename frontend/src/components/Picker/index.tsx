import { useState } from "react";
import { Container } from "./styles"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"

export function Picker(){
    const [date, setDate] = useState(new Date());

    return (
        <Container>
            <DatePicker 
                selected={date}
                onChange={(date: Date) => {setDate(date)}}
                inline
            />
        </Container>
    )
}