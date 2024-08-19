import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { Control, Controller } from "react-hook-form";

interface InputProps extends TextInputProps {
    name: string;
    control: Control;
}

export function Input({name, control,...rest}: InputProps) {
    return (
        <Controller
            control={control}
            name={name}
            render={({field: {onChange, value}}) => (
                <Container 
                    onChangeText={onChange}
                    value={value}
                    {...rest}
                />
            )}
        />
    )
}