// Импортируем компоненты
import SiteSider from './components/Sider';
import SiteHeader from './components/Header';
import SiteForm from './components/Form';
import ComponentWithInputs from './components/ComponentWithInputs';


import { Layout } from 'antd';

const { Content, Footer} = Layout;



function App() {
  

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiteSider /> 
      <Layout className="site-layout">
          <SiteHeader />
          
          <Content style={{ margin: '0 16px' }}>
                <ComponentWithInputs />
                        
            <SiteForm />
        
          </Content>
          

          <Footer style={{ textAlign: 'center' }}>
            Oleksii Maslak ©2023
          </Footer>
      </Layout>
    </Layout>
  );
}

export default App;