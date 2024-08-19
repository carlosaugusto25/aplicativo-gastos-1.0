import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

interface CategorySelectButtonProps {
    title: string;
    onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: CategorySelectButtonProps) {
    return (
        <Container onPress={onPress}>
            <Title>{title}</Title>
            <Icon />
        </Container>
    )
}