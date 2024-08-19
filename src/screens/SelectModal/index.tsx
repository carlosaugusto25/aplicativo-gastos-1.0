import { FlatList } from "react-native";
import { Category, Container, Content, Icon, Name, Separetor } from "./styles";
import { categories } from "../../utils/categories";
import { Header } from "../../components/Header";

type CategoryType = {
    key: string;
    name: string;
}

interface ModalProps {
    setCategory: (category: CategoryType) => void;
    close: () => void
}

export function SelectModal({setCategory, close}: ModalProps) {
    
    function handleSetCategory(category: CategoryType) {
        setCategory(category);
        close();
    }
    
    return(
        <Container>
            <Header isHome={false} screenName="Selecione uma categoria" type="down" />
            <Content>
                <FlatList 
                    data={categories} 
                    keyExtractor={item => item.key} 
                    renderItem={({item}) => 
                        <Category onPress={()=>handleSetCategory(item)}>
                            <Icon name={item.icon} />
                            <Name>{item.name}</Name>
                        </Category>
                    }
                    ItemSeparatorComponent={() => <Separetor/>}
                />
            </Content>
        </Container>
    )
}