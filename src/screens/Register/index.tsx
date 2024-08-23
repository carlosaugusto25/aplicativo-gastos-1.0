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
import { Alert, Keyboard, Modal } from "react-native";
import { SelectModal } from "../SelectModal";
import { FieldValues, useForm } from "react-hook-form";
import { TouchableWithoutFeedback } from "react-native";
import { api } from "../../service/api";
import { format } from "date-fns";

type TypeTransactions = "up" | "down";

type DataType = {
    name: string;
    value: number;
    type: TypeTransactions;
    category?: string;
    date: string;
}

export function Register() {

    const [selectType, setSelectType] = useState<"up" | "down">("up");
    const [category, setCategory] = useState({ key: "categoria", name: "Selecione a categoria" });
    const [modalVisible, setModalVisible] = useState(false);

    const { control, handleSubmit, reset } = useForm();

    async function handleCreateTransaction(data: DataType) {
        await api.post('/transactions', data).then(response => {
            Alert.alert('Sucesso', 'Transação criada com sucesso')
        }).catch(error => {
            console.log('error', error)
            Alert.alert('Ops', 'Não foi possível criar a transação')
        })
    }

    function handlePress(type: TypeTransactions) {
        setSelectType(type)
    }

    function handleOpenModal() {
        setModalVisible(true)
    }

    function handleCloseModal() {
        setModalVisible(false)
    }

    function clear(){

        setCategory({ key: "categoria", name: "Selecione a categoria" })
        setSelectType("up")

        reset({
            name: '',
            value: '',
        })
    }

    function handleRegister(form: FieldValues) {
        
        const currentDate = format(new Date(), 'dd/MM/yyyy')
        
        const data = {
            name: form.name,
            value: form.value,
            type: selectType,
            category: category.key,
            date: currentDate
        }

        if(category.key !== "categoria") {
            data.category = category.key
        }

        handleCreateTransaction(data)
        clear()
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