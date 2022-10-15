import { Button, Container, Flex, FooterClass, Input } from "../assets/styles/base";
import { Text } from "../assets/styles/components";

function Footer() {
 return (
  <FooterClass>
    <Container>
      <Flex padding={'5px 0 20px 0'}>
        <Flex direction={'column'} align={'start'}>       
          <Text size={18} weight={700}>Подпишитесь на рассылку</Text>
          <Text size={16} weight={400}>Ежемесячная рассылка значимых событий. Без спама</Text>
        </Flex>
        <Flex width={35}>       
          <Input width={'40%'} placeholder='Почта'/>
          <Button>Подписаться</Button>
        </Flex>
      </Flex>
      <hr />
      <Flex padding={'20px 0 70px 0'} align={'baseline'}>
        <Flex direction={'column'} align={'start'}>       
          <Text size={18} weight={700}>Сервис</Text>
          <Text size={16} weight={400}>О нас</Text>
          <Text size={16} weight={400}>Контакты</Text>
          <Text size={16} weight={400}>Политика конфиденциальности</Text>
        </Flex>
        <Flex direction={'column'} align={'start'}>       
          <Text size={18} weight={700}>Клиентам</Text>
          <Text size={16} weight={400}>Вопросы и ответы</Text>
          <Text size={16} weight={400}>Как купить билеты?</Text>
          <Text size={16} weight={400}>Порядок и условия возврата</Text>
        </Flex>
        <Flex direction={'column'} align={'start'}>       
          <Text size={18} weight={700}>Партнерам</Text>
          <Text size={16} weight={400}>Корпоративные клиенты</Text>
        </Flex>
        <Flex direction={'column'} align={'start'}>       
          <Text size={18} weight={700}>Соцсети</Text>
          <Text size={16} weight={400}>Инстаграм</Text>
          <Text size={16} weight={400}>ВКонтакте</Text>
          <Text size={16} weight={400}>Whatsapp</Text>
        </Flex>
      </Flex>
      <Flex> 
        <Text size={14} weight={500}>© 2005–2022 Gaming-clubs.kz</Text>
        <Text size={14} weight={500}>Документация</Text>
        <Text size={14} weight={500}>Пользовательское соглашение</Text>
        <Text size={14} weight={500}>Карта сайта</Text>
        <Text size={14} weight={500}>Политика конфиденциальности</Text>
      </Flex>
    </Container>  
  </FooterClass>
 )
}
export default Footer;