import ProductList from '../../components/ProductList'

import {
  useGetActionQuery,
  useGetFightQuery,
  useGetRPGQuery,
  useGetSimulationQuery,
  useGetSportsQuery
} from '../../services/api'

const Categories = () => {
  const { data: ActionGames, isLoading: isLoadingAction } = useGetActionQuery()
  const { data: FightGames, isLoading: isLoadingFight } = useGetFightQuery()
  const { data: RPGGames, isLoading: isLoadingRPG } = useGetRPGQuery()
  const { data: SimulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationQuery()
  const { data: SportGames, isLoading: isLoadingSports } = useGetSportsQuery()

  return (
    <>
      <ProductList
        games={ActionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={SportGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductList
        games={FightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        games={RPGGames}
        title="RPG"
        background="gray"
        id="RPG"
        isLoading={isLoadingRPG}
      />
      <ProductList
        games={SimulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
