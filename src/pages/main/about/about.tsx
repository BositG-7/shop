import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Text, Title } from '@mantine/core';

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
	const navigate = useNavigate();

	return (
		<>
			<Flex h="100vh" w="100%" justify="center" align="center" direction="column">
				<Flex p="24px 100px" h={108} bg="#eaded7" align="center" w="100%">
					<Text size="2rem">
						<span style={{ color: '#795744' }}>Home / </span>About
					</Text>
				</Flex>
				<Flex p="24px 100px" gap={20} justify="space-between" align="center" w="100%">
					<Flex>
						<img
							style={{
								display: 'block',
								borderRadius: 'var(--radius)',
								objectFit: 'cover'
							}}
							height={554}
							width={700}
							src="https://e-com-react.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
							alt=""
						/>
					</Flex>
					<Flex justify="center" direction="column" w="100%">
						<Flex gap={10} justify="center" direction="column">
							<Title size="2.5rem">Our Story</Title>
							<Flex
								sx={{
									width: '6rem',
									height: '.25rem',
									background: 'var(--clr-primary-5)'
								}}
							/>
						</Flex>
						<Text
							sx={{
								lineHeight: '2',
								maxWidth: '45em',
								margin: '2rem auto 0px',
								color: 'var(--clr-grey-5)'
							}}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat, modi doloremque necessitatibus eum dolor nesciunt
							delectus, voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur tempora cumque. Ut quo enim vero odio minus nostrum
							eveniet, doloribus veritatis dolorem unde ipsum, voluptatibus totam. Explicabo, quas libero! Laborum incidunt minima consequatur
							ratione?
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default About;
