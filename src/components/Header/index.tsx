import { StatusBar } from "expo-status-bar";
import { Container, HeaderType, Logo, Title, TitleNoHome } from "./styles";

interface HeaderProps {
    isHome: boolean;
    screenName: string;
    type: HeaderType["type"]
}

export function Header({ isHome, screenName, type }: HeaderProps) {
    return (
        <>
            {
                isHome ?
                    <Container type={type}>
                        <StatusBar style="light" />
                        <Logo />
                        <Title>{screenName}</Title>
                    </Container>
                    :
                    <Container type={type}>
                        <StatusBar style="light" />
                        <TitleNoHome>{screenName}</TitleNoHome>
                    </Container>
            }
        </>

    )
}