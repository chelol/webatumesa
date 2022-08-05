
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Feature from 'sections/feature';
import BusinessProfit from 'sections/business-profit';
import Knowledge from 'sections/knowledge';
import WorkFlow from 'sections/workflow';

export default function registrar(){
      return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Tu propio canal de pedidos online, sin comisiones. Web para tu restaurante, recibi pedidos online ilimitados. "
          title="Web - A Tu Mesa"
        />
        <Banner />
        <Feature />
        <BusinessProfit />
        <Knowledge />
        <WorkFlow />
      </Layout>
    </ThemeProvider>
  );
}
