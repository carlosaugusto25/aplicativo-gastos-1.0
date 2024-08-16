import { Container, SmallButtonsType, Title } from "./styles";

export interface SmallButtonProps {
    title: string;
    type: SmallButtonsType;
    onPress: () => void;
    isSelected: boolean;
}

export function SmallButton({title, type, onPress, isSelected}: SmallButtonProps) {
    return(
        <Container type={type} onPress={onPress} isSelected={isSelected}>
            <Title>{title}</Title>
        </Container>
    )
}