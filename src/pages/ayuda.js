
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Ayuda from 'sections/ayuda';


export default function ayuda(){
      return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Tu propio canal de pedidos online, sin comisiones. Web para tu restaurante, recibi pedidos online ilimitados. "
          title="Web - A Tu Mesa"
        />
        <Ayuda />
      </Layout>
    </ThemeProvider>
  );
}
