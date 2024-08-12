import { Banner } from "../../components/Banner";
import { Total } from "../../components/Total";
import { Container, ContentBanners } from "./styles";

export function Home(){
    return(
        <Container>
            <Total/>

            <ContentBanners>
                <Banner title="Entradas" type={"up"} value="R$6.000,00" />
                <Banner title="Saídas" type={"down"} value="R$2.000,00"/>
            </ContentBanners>
        </Container>
    )
}