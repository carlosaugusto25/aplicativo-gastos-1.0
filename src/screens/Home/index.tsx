import { FlatList } from "react-native";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Total } from "../../components/Total";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import { Container, ContainerList, Content, ContentBanners } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Loading } from "../../components/Loading";
import theme from "../../theme";
import { formatedValue, getTotalForTypes } from "../../helper/formatted";
import { useIsFocused } from "@react-navigation/native";
import { useLoadTransactions } from "../../hooks/useLoadTransactions";

export type ListCardType = {
    id: string;
} & Pick<TransactionCardProps, 'name' | 'value' | 'type' | 'date' | 'category'>

export function Home() {

    const isFocused = useIsFocused()
    const { transaction, loading, loadTransactions } = useLoadTransactions()
    
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [idDelete, setIdDelete] = useState('')

    const { totalUp, totalDown, total } = getTotalForTypes(transaction)

    async function handleDeleteTransaction(id: string) {
        await api.delete(`/transactions/${id}`)
        loadTransactions()
    }

    function handleOpenModalDelete(id: string) {
        setOpenModalDelete(true)
        setIdDelete(id)
    }

    function handleListTransactions() {
        return (
            <ContainerList>
                <FlatList
                    data={transaction}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => 
                    <TransactionCard
                        name={item.name}
                        value={formatedValue(item.value)}
                        type={item.type}
                        date={item.date}
                        category={item.category}
                        onPress={()=>handleDeleteTransaction(item.id)}
                    />}
                    showsVerticalScrollIndicator={false}
                />
            </ContainerList>
        )
    }

    useEffect(() => {
        loadTransactions()
    },[isFocused])

    return (
        <Container>
            <Header isHome type='up' screenName="Gastos" />
            <Content>
                <Total value={total} />

                <ContentBanners>
                    <Banner title="Entradas" type={"up"} value={totalUp} />
                    <Banner title="Saídas" type={"down"} value={totalDown} />
                </ContentBanners>

                {loading ? <Loading background={theme.COLORS.BACKGROUND} loadColor={theme.COLORS.PRIMARY} /> : handleListTransactions()}

            </Content>
        </Container>
    )
}