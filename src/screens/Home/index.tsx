import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Total } from "../../components/Total";
import { TransactionCard } from "../../components/TransactionCard";
import { Container, Content, ContentBanners } from "./styles";

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

                <TransactionCard 
                    name="Compra TV" 
                    value="R$1.046,00" 
                    type="up" 
                    date="10/03/2022" 
                    category="Lazer"
                />
            </Content>
        </Container>
    )
}