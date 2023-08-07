import { useDispatch } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { add, open } from '../../store/Reducers/cart'

import * as S from './styles'
import { parseToBrl } from '../../utils'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}

            {game.prices.current && <>Por {parseToBrl(game.prices.current)}</>}
          </p>

          {game.prices.current && (
            <Button
              variant="primary"
              type="button"
              title="Clique aqui para Adicionar ao carrinho"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}
export default Hero