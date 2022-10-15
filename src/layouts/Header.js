import { Link } from 'react-router-dom';
import { Button, Container, Flex, HeaderClass, ImageBlock, Input } from '../assets/styles/base';
import { Text } from '../assets/styles/components';
function Header() {
 return (
  <HeaderClass>
   <Container>
    <Flex padding={'0 0 20px 0'}>
      <Flex width={35}>
        <Link to={'/'}>
          <ImageBlock width={150}>
            <img src={require('../assets/images/Logo.png')} />
          </ImageBlock>
        </Link>
        <Input width={'100%'} placeholder='Компьютерные клубы, PS клубы ...'/>
      </Flex>
      <Button>Войти</Button>
    </Flex>
    <Flex>
      <Flex just={'start'} gap={'40'}>
        <Link to={'/'}><Text size={16} weight={500}>Главная</Text></Link>
        <Text size={16} weight={500}>Компьютерные клубы</Text>
        <Text size={16} weight={500}>PlayStation клубы</Text>
        <Text size={16} weight={500}>Скидки</Text>
        <Link to={'/about'}><Text size={16} weight={500}>О нас</Text></Link>
        <Text size={16} weight={500}>Контакты</Text>
      </Flex>
      <Flex just={'end'} gap={'40'}>
        <Text size={16} weight={500}>Выберите город</Text>
        <Text size={16} weight={500}>Выберите дату</Text>
      </Flex>
    </Flex>
   </Container>
  </HeaderClass>
 )
}
export default Header;