import { Header } from "../../components/Header";
import { SmallButton } from "../../components/SmallButton";
import {
    Container,
    Content,
    FormContainer,
    Title,
    ContentButtons,
    Button,
    ButtonTitle,
    ContainerButtons
} from "./styles";

export function Register() {
    return (
        <Container>
            <Header type="up" screenName="Nova transação" isHome={false} />

            <Content>
                <FormContainer>
                    <Title>Tipo da transação</Title>

                    <ContainerButtons>
                        <SmallButton title="Entrada" type="up" isSelected onPress={() => console.log('clicou')} />
                        <SmallButton title="Saída" type="down" isSelected={false} onPress={() => console.log('clicou no botão 2')}  />
                    </ContainerButtons>

                    <Title>Dados da transação</Title>
                </FormContainer>


                <ContentButtons>
                    <Button>
                        <ButtonTitle>Cadastrar</ButtonTitle>
                    </Button>
                </ContentButtons>

            </Content>

        </Container>
    )
}