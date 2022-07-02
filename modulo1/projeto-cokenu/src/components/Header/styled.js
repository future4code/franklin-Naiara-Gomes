import  styled from "styled-components"
import Toolbar from '@material-ui/core/Toolbar'

export const StyledToolbar = styled(Toolbar)`
//deixar botoes separados
display: flex;
//direção na mesma linha
flex-direction: row;
//separar os elementos
justify-content: space-between;
`