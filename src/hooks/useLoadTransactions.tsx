import { useEffect, useState } from "react";
import { ListCardType } from "../screens/Home";
import { Alert } from "react-native";
import { api } from "../service/api";

export const useLoadTransactions = () => {
    
    const [transaction, setTransaction] = useState<ListCardType[]>([]);
    const [loading, setLoading] = useState(false);
    async function loadTransactions() {
        setLoading(true)
        await api.get('/transactions').then(response => {
            setTransaction(response.data)
        }).catch(error => {
            console.log(error)
            Alert.alert('Ops', 'Não foi possível carregar as transações')
        }).finally(() => setLoading(false))
    }

    useEffect(() => {
        loadTransactions()
    }, [])

    return { transaction, loading, loadTransactions }
}