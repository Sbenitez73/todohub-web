import { ConfigProvider } from 'antd';
import { Home } from './components/Home';
import { getAntdConfiguration } from './helpers/getAntdConfiguration';

function App() {
	return (
		<ConfigProvider
			theme={ getAntdConfiguration() } >
			<Home />
		</ConfigProvider>		
	);
}

export default App;
