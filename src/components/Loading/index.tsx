import { Container, LoadingIndicator } from "./styles";

export interface LoadingProps {
    background?: string;
    loadColor?: string;
}

export function Loading({background, loadColor}: LoadingProps) {
    return (
        <Container background={background}>
            <LoadingIndicator loadColor={loadColor} />
        </Container>
    )
}