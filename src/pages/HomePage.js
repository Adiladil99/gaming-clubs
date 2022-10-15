import { Container } from "../assets/styles/base";
import { Carousel  } from 'antd';
import { Text } from "../assets/styles/components";
import { baseVar } from "../assets/styles/theme";
import Card from "../components/Card";
import BannerCard from "../components/BannerCard";

const props = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const props1 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
const HomePage = () => (
  <Container radius={20}>
    <Carousel swipeToSlide autoplay draggable arrows {...props}>
      <BannerCard />
      <BannerCard />
      <BannerCard />
      <BannerCard />
      <BannerCard />
    </Carousel>
    <Text margin={'40px 0 20px 0'} size={24} weigth={400}>Популярные клубы</Text>
    <Carousel swipeToSlide autoplay draggable arrows {...props1}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </Carousel>
    <Text margin={'40px 0 20px 0'} size={24} weigth={400}>Скидки</Text>
    <Carousel swipeToSlide autoplay draggable arrows {...props1}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </Carousel>
    <Text margin={'40px 0 20px 0'} size={24} weigth={400} color={baseVar.colors.redCol}>Компьютерные клубы</Text>
    <Carousel swipeToSlide autoplay draggable arrows {...props1}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </Carousel>
    <Text margin={'40px 0 20px 0'} size={24} weigth={400} color={baseVar.colors.redCol}>PlayStation клубы</Text>
    <Carousel swipeToSlide autoplay draggable arrows {...props1}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </Carousel>
  </Container>
);
export default HomePage;