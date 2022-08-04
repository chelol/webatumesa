/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Marketplace from 'assets/feature/marketplace.svg';
import Gift from 'assets/feature/gift.svg';
import Award from 'assets/feature/award.svg';

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: 'Marketplace',
    title: '¡Gana más dinero!',
    text:
      'Sin necesidad de pagar comisiones carísimas. De esta forma podrás ofrecer un precio más justo a tus clientes.',
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: 'Gift',
    title: 'No necesitas descargar ninguna aplicación',
    text:
      'Tu menú está disponible accediendo a una dirección web personalizada especialmente para tu restaurante.',
  },
  {
    id: 3,
    imgSrc: Award,
    altText: 'Tu propio menu online',
    title: 'Tus clientes pueden consultar tu carta cómodamente desde su casa o desde tu local.',
    text:
      'Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.',
  },
  {
    id: 4,
    imgSrc: Award,
    altText: 'Awards',
    title: 'Multiple Awards wins',
    text:
      'Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.',
  },
  {
    id: 5,
    imgSrc: Award,
    altText: 'Awards',
    title: 'Multiple Awards wins',
    text:
      'Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.',
  },
  {
    id: 6,
    imgSrc: Award,
    altText: 'Awards',
    title: 'Multiple Awards wins',
    text:
      'Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.',
  },



];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          title="Creamos la mejor experiencia"
          description="Lanza tu propio sitio web de restaurante totalmente funcional con pedidos en línea, en cuestión de segundos. Sin necesidad de conocimientos de programación 🙂"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
