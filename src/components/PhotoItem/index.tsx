import { Photo } from '../../types/photo'
import * as C from './styles'

type Props = {
    item: Photo
}

export const PhotoItem = ({ item }: Props) => {
    return (
        <C.Container>
            <img src={item.url} alt="" />
            {item.name}
        </C.Container>
    )
}