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
import { Keyboard, Modal } from "react-native";
import { SelectModal } from "../SelectModal";
import { FieldValues, useForm } from "react-hook-form";
import { TouchableWithoutFeedback } from "react-native";

type TypeTransactions = "up" | "down";

export function Register() {

    const [selectType, setSelectType] = useState<"up" | "down">("up");
    const [category, setCategory] = useState({ key: "categoria", name: "Selecione a categoria" });
    const [modalVisible, setModalVisible] = useState(false);

    const { control, handleSubmit } = useForm();

    function handlePress(type: TypeTransactions) {
        setSelectType(type)
    }

    function handleOpenModal() {
        setModalVisible(true)
    }

    function handleCloseModal() {
        setModalVisible(false)
    }

    function handleRegister(form: FieldValues) {
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType: selectType,
            category: category.key,
        }
        console.log('data', data)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header type={selectType} screenName="Nova transação" isHome={false} />

                <Content>
                    <FormContainer>
                        <Title>Tipo da transação</Title>

                        <ContainerButtons>
                            <SmallButton title="Entrada" type="up" isSelected={selectType === "up"} onPress={() => handlePress("up")} />
                            <SmallButton title="Saída" type="down" isSelected={selectType === "down"} onPress={() => handlePress("down")} />
                        </ContainerButtons>

                        <Title>Dados da transação</Title>
                        <Input
                            name="name"
                            control={control}
                            placeholder="Insira o nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                        />
                        <Input
                            name="value"
                            control={control}
                            placeholder="Insira o valor"
                            keyboardType="numeric"
                        />

                        {selectType === "down" && <CategorySelectButton title={category.name} onPress={handleOpenModal} />}


                    </FormContainer>


                    <ContentButtons>
                        <Button type={selectType} onPress={handleSubmit(handleRegister)}>
                            <ButtonTitle>Cadastrar</ButtonTitle>
                        </Button>
                    </ContentButtons>

                </Content>

                <Modal visible={modalVisible} animationType="slide">
                    <SelectModal close={handleCloseModal} setCategory={setCategory} />
                </Modal>

            </Container>
        </TouchableWithoutFeedback>
    )
}