import { Flex, CardItem, ImageBlock } from "../assets/styles/base";
import { Text } from "../assets/styles/components";
function Card() {
 return (
  <CardItem>
   <ImageBlock width={'100%'} height={200}><img src={'https://moon.kz/upload/iblock/162/16231799d7b2adc43e964e0abc109ea8.jpg'} /></ImageBlock>
    <Text overflow size={18} weight={700}>Компьютерный клуб GameOver</Text>
    <Text size={12} weight={400} color={'#93939f'}>Толе би №279</Text>
    <Text size={14} weight={600}>Статус: VIP</Text>
  </CardItem>
 )
}
export default Card;