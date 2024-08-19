import { useState } from "react";
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
    ContainerButtons,
    ButtonProps
} from "./styles";
import { Input } from "../../components/Input";
import { CategorySelectButton } from "../../components/CategorySelectButton";
import { Modal } from "react-native";
import { SelectModal } from "../SelectModal";

export function Register() {
    
    const [selectType, setSelectType] = useState<"up" | "down">("up");
    const [category, setCategory] = useState({key: "categoria", name: "Selecione a categoria"});
    const [modalVisible, setModalVisible] = useState(false);

    function handlePress(type: "up" | "down") {
        setSelectType(type)
    }

    function handleOpenModal(){
        setModalVisible(true)
    }

    function handleCloseModal(){
        setModalVisible(false)
    }
    
    return (
        <Container>
            <Header type={selectType} screenName="Nova transação" isHome={false} />

            <Content>
                <FormContainer>
                    <Title>Tipo da transação</Title>

                    <ContainerButtons>
                        <SmallButton title="Entrada" type="up" isSelected={selectType === "up"} onPress={() => handlePress("up")} />
                        <SmallButton title="Saída" type="down" isSelected={selectType === "down"} onPress={() => handlePress("down")}  />
                    </ContainerButtons>

                    <Title>Dados da transação</Title>
                    <Input/>

                    {selectType === "down" && <CategorySelectButton title={category.name} onPress={handleOpenModal}/>}
                    

                </FormContainer>


                <ContentButtons>
                    <Button type={selectType}>
                        <ButtonTitle>Cadastrar</ButtonTitle>
                    </Button>
                </ContentButtons>

            </Content>

            <Modal visible={modalVisible} animationType="slide">
                <SelectModal close={handleCloseModal} setCategory={setCategory} />
            </Modal>

        </Container>
    )
}