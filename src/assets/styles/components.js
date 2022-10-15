import styled from 'styled-components'
// Пример вертикального разделителя
export const Divider = styled.div`
 height: ${({ height = 8 }) => height}px;

 // Медиа запрос
 @media ${({ theme }) => theme.media.large} {
   height: ${({ heightMob = 4 }) => heightMob}px;
 }
`

export const Text = styled.p`
 font-size: ${({ size = 24 }) => size}px;
 font-weight: ${({ weight = 700 }) => weight};
 color: ${({ color = '#252525' }) => color};
 margin: ${({ margin = '0' }) => margin};
 ${({ overflow }) => (overflow == 1 ? 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;' : '')}
`

export const Title2 = styled.h2`
 font-size: 18px;
 font-weight: ${({ weight = 700 }) => weight};
`