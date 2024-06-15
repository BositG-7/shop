import { FunctionComponent } from 'react';
import { Flex, Text } from '@mantine/core';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	const handleClickScroll = () => {
		const element = document.getElementById('navbar');

		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Flex justify="center" align="center" w="100%" h="80px" bg="#222">
			<Text
				onClick={handleClickScroll}
				sx={{
					cursor: 'pointer'
				}}
				size="1rem"
				color="#fff">
				© 2024 <span style={{ color: 'var(--clr-primary-5)' }}>ComfySloth</span> All rights reserved
			</Text>
		</Flex>
	);
};

export default Footer;
