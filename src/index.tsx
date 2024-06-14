/* eslint-disable import/order */
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Containers } from 'modules/auth';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
// eslint-disable-next-line import/order
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import App from './app';

import './assets/styles/index.css';
import 'react-phone-input-2/lib/style.css';

// React uygulamasını oluşturmak için bir kök (root) oluşturun
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// React Query istemcisi oluşturun
const client = new QueryClient();

// Kök öğeyi render et

root.render(
	<BrowserRouter>
		<QueryParamProvider adapter={ReactRouter6Adapter}>
			<QueryClientProvider client={client}>
				<MantineProvider>
					{/* Auth bileşeni içindeki alt bileşenleri oluşturun */}
					<Containers.Auth>
						<>
							<App />
							<Notifications position="top-right" />
						</>
					</Containers.Auth>
				</MantineProvider>
			</QueryClientProvider>
		</QueryParamProvider>
	</BrowserRouter>
);
