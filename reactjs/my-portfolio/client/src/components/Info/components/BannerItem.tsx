import { CloudDownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface BannerItemProps {
	image: string;
}

const BannerItem = ({ image }: BannerItemProps) => {
	return (
		<div className="relative w-full h-screen">
			<div
				className={`banner__image h-full w-full bg-cover bg-center`}
				style={{
					backgroundImage: `url(${image})`,
				}}
			>
				<div className="opacity-60 absolute top-0 left-0 z-30 w-full h-full bg-black">
					<section className="z-[1000] grid grid-cols-2 h-full">
						<section className="px-14 flex flex-col items-start justify-center h-full text-white">
							<div className="text-[60px] font-playfair">
								<p className="text-[60px] font-playfair font-bold leading-snug">
									Hi!
									<br /> I'm{' '}
									<span className="font-playfair leading-snug">Hưng</span>
								</p>
							</div>
							<p className="mb-4">Lorem ipsum dolor sit amet.</p>
							<Link
								to="/"
								className="inline-flex items-center justify-center gap-2 px-8 py-2 text-base text-white bg-transparent border border-white rounded-lg"
							>
								<span>Download</span>
								<CloudDownloadOutlined />
							</Link>
						</section>
						<span className="text-3xl text-white"></span>
					</section>
				</div>
			</div>
		</div>
	);
};

export default BannerItem;
