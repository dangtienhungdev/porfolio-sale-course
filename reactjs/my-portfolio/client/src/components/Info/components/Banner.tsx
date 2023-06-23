import BannerItem from './BannerItem';
import { Carousel } from 'antd';

const Banner = () => {
	return (
		<Carousel autoplay>
			{/* <BannerItem image="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg" />
			<BannerItem image="https://images5.alphacoders.com/131/thumb-1920-1316292.jpeg" /> */}
			<BannerItem image="https://i.pinimg.com/originals/2a/6c/fe/2a6cfe0aecf1ba14803f0431ea84a56d.jpg" />
		</Carousel>
	);
};

export default Banner;
