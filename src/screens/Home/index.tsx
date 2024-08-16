import { FlatList } from "react-native";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Total } from "../../components/Total";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import { Container, ContainerList, Content, ContentBanners } from "./styles";

export type ListCardType = {
    id: string;
} & Pick<TransactionCardProps, 'name' | 'value' | 'type' | 'date' | 'category'>

const data: ListCardType[] = [
    {
        id: '1',
        name: 'Compra TV',
        value: 'R$1.046,00',
        type: 'up',
        date: '10/03/2022',
        category: 'Lazer'
    },
    {
        id: '2',
        name: 'Ingresso jogo do América',
        value: 'R$40,00',
        type: 'down',
        date: '10/03/2022',
        category: 'Lazer'
    },
    {
        id: '3',
        name: 'Conta de Energia',
        value: 'R$512,00',
        type: 'up',
        date: '10/03/2022',
        category: 'Despesa'
    }
]

export function Home() {
    return (
        <Container>
            <Header isHome type='up' screenName="Gastos" />
            <Content>
                <Total />

                <ContentBanners>
                    <Banner title="Entradas" type={"up"} value="R$6.000,00" />
                    <Banner title="Saídas" type={"down"} value="R$2.000,00" />
                </ContentBanners>

                <ContainerList>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <TransactionCard
                            name={item.name}
                            value={item.value}
                            type={item.type}
                            date={item.date}
                            category={item.category}
                        />}
                        showsVerticalScrollIndicator={false}
                    />
                </ContainerList>

            </Content>
        </Container>
    )
}