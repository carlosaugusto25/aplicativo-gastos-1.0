import { useIsFocused } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { useLoadTransactions } from "../../hooks/useLoadTransactions";
import { useEffect, useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import theme from "../../theme";
import { Loading } from "../../components/Loading";
import { ListCardType } from "../Home";
import { formatedValue, getTransactionsByMouth } from "../../helper/formatted";
import { categories } from "../../utils/categories";
import { VictoryPie } from "victory-native";
import { Category } from "../../components/Category";
import { 
    ChartContainer, 
    Container, 
    Content,
    MouthSelect,
    MouthButton,
    Mouth,
    MouthIcon, 
} from "./styles";
import { addMonths, format, subMonths } from "date-fns";

interface CategoryData {
    key: string;
    name: string;
    total: string;
    percent: string;
    color: string;
}
export function Chart() {

    const isFocused = useIsFocused();
    const { transaction, loading, loadTransactions } = useLoadTransactions()

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [totalByCategory, setTotalByCategory] = useState<CategoryData[]>([])

    function loadTransactionsByCategory(transactionFunction: ListCardType[]) {
        const newTotal: CategoryData[] = [];

        if (!transactionFunction) return;

        const transactionsFilterByDate = getTransactionsByMouth(transactionFunction, selectedDate)
        const totalByDate = transactionsFilterByDate.reduce((total, transaction) => total + parseFloat(transaction.value), 0)

        categories?.map(category => {

            let categorySum = 0;
            transactionsFilterByDate?.map(transaction => {
                if (transaction.category === category.key) {
                    categorySum += parseFloat(transaction.value)
                }
            })

            if (categorySum > 0) {
                const total = formatedValue(categorySum)
                const percent = `${(categorySum / totalByDate * 100).toFixed(0)}%`

                newTotal.push({
                    key: category.key,
                    name: category.name,
                    color: category.color,
                    total,
                    percent
                })
            }
        })

        setTotalByCategory(newTotal)
    }

    function handleDateChange(action: 'next' | 'back') {
        if(action === 'next') {
            const newDate = addMonths(selectedDate, 1);
            setSelectedDate(newDate);
            return
        }

        const newDate = subMonths(selectedDate, 1);
        setSelectedDate(newDate);
    }

    useEffect(() => {
        loadTransactions()
    }, [isFocused])

    useEffect(() => {
        if (transaction && transaction.length > 0) {
            loadTransactionsByCategory(transaction)
        }
    }, [transaction, selectedDate])

    return (
        <Container>
            <Header isHome={false} screenName="Gráfico por Categorias" type="up" />
            <Content
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: useBottomTabBarHeight() }}
            >
                {
                    loading ?
                        <Loading background={theme.COLORS.BACKGROUND} loadColor={theme.COLORS.PRIMARY} />
                        :
                        <>
                            <MouthSelect>
                                <MouthButton onPress={()=> handleDateChange('back')}>
                                    <MouthIcon name='chevron-left' />
                                </MouthButton>

                                <Mouth>{format(selectedDate, 'MMM, yyyy')}</Mouth>

                                <MouthButton onPress={()=> handleDateChange('next')}>
                                    <MouthIcon name='chevron-right' />
                                </MouthButton>
                            </MouthSelect>

                            <ChartContainer>
                                <VictoryPie
                                    data={totalByCategory}
                                    x="percent"
                                    y="total"
                                    colorScale={totalByCategory?.map(category => category.color)}
                                    style={{
                                        labels: {
                                            fontSize: 14,
                                            fill: theme.COLORS.LIGHT
                                        }
                                    }}
                                    labelRadius={68}
                                />
                            </ChartContainer>

                            {
                                totalByCategory?.map(category => (
                                    <Category key={category.key} title={category.name} color={category.color} value={category.total} />
                                ))
                            }
                        </>
                }
            </Content>
        </Container>
    )
}