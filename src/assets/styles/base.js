import styled from 'styled-components'
import { baseVar } from './theme'
// Пример вертикального разделителя

export const Container = styled.div`
 margin:  0 auto;
 ${baseVar.sizes.container};
 border-radius: ${({radius = 0}) => radius}px;
`

export const HeaderClass = styled.header`
 width: 100vw;
 padding: 25px 0;
 box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`

export const FooterClass = styled.header`
 width: 100vw;
 background: ${baseVar.colors.footerBack};
 padding: 25px 0;
 box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.1);
`

export const Content = styled.main`
 flex: 1;
 padding: 30px 0;
`

export const Flex = styled.div`
 display: flex;
 ${({ width }) => (width ? 'width:'+width+'%' : '')};
 flex-direction: ${({ direction = 'row' }) => direction};
 justify-content: ${({ just = 'space-between' }) => just};
 align-items: ${({ align = 'center' }) => align};
 gap: ${({ gap = '15' }) => gap}px;
 padding: ${({ padding = '0' }) => padding};
`

export const ImageBlock = styled.div`
 width: ${({ width = '25px' }) => width};
 height: ${({ height = '40' }) => height}px;
 background-size: cover;
 img {  
  border-radius: 20px;
 }
`

export const CardItem = styled.div`
 width: ${({ width = 100 }) => width}%;
 height: ${({ height = 290 }) => height}px;
 border-radius: 20px;
`

export const Button = styled.button`
 background: ${({ back = baseVar.colors.redCol }) => back};
 color: ${({ color = 'white' }) => color};
 border-radius: 10px;
 font-size: 16px;
 height: 49px;
 padding: 0 30px;
 border: none;
 cursor: pointer;
 &:hover {
  opacity: 0.9;
 }
`

export const Input = styled.input`
 background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iNyIgc3Ryb2tlPSIjMjcyNzNGIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMjAgMjBsLTMtMyIgc3Ryb2tlPSIjMjcyNzNGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==);
 background-position: 5px 13px;
 background-repeat: no-repeat;
 flex: 1;
 height: 50px;
 padding-left: 32px;
 width: ${({ width = '100%' }) => width};
 border-radius: 10px;
 border: 1px solid #e5e5e5;
 font-size: 16px;
 &:focus, &:hover {
  border: 1px solid #f52a52;
 }
`