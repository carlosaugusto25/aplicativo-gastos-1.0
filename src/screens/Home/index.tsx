import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Total } from "../../components/Total";
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
            </Content>
        </Container>
    )
}