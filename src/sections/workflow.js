/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

const data = [
  {
    id: 1,
    title: 'Sencillo de utilizar y administrar',
    text:
      'Totalmente autoadministrable con actualización en línea. Sitio web adaptado a todas las pantallas: Moviles, tablet y PC, sin descargar ninguna aplicación      ',
  },
  {
    id: 2,
    title: 'Tu propia pagina de restaurante',
    text:
      'Fácil acceso para tus clientes, desde QR y link exclusivo. Ej.: atumesa.uy/tulocal.',
  },
  {
    id: 3,
    title: 'Varias opciones para tus clientes',
    text:
      'Menu Digital para tu Salón, Reserva de Mesas, Delivery, Take Away (Opcional Sin Costo)',
  },
  {
    id: 4,
    title: 'Herramientas y opciones varias',
    text:
      'Herramientas específicas: Variantes, Adicionales, Extras, Subcategorias, Alérgenos.',
  },
  {
    id: 5,
    title: 'Somos tu mejor opcion',
    text:
      'Sin costos por comisión, abono mensual muy accesible.',
  },
  {
    id: 6,
    title: 'Enlace para tu restaurante',
    text:
      'Podrás compartirla en tus campañas de Redes, Mail o por Whatsapp e integrarlarla a todas las plataformas: Instagram, Facebook, Google Maps y webs.      .',
  },


];

export default function WorkFlow() {
  return (
    <section sx={{ variant: 'section.workflow' }}>
      <Container>
        <SectionHeader
          title="¿Qué te ofrecemos?"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={{ variant: 'text.heading' }}>{item.title}</Heading>
                <Text sx={styles.wrapper.description}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
<p></p>
<p></p>

      </Container>

    </section>

  );
  
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 3],
    pb: [0, null, null, null, null, null, null, null, 5],
    mb: -1,
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
  card: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: ['center', null, 'left'],
    px: [0, 5, 0],
  },

  iconBox: {
    flexShrink: 0,
    mb: [4, null, null, 0],
    fontSize: [8, 9, null, null, 10, null, null, 11],
    fontWeight: 300,
    fontFamily: 'special',
    color: 'heading',
    lineHeight: 1,
    letterSpacing: 'heading',
    mr: ['auto', null, 0, 4, null, null, null, 5],
    ml: ['auto', null, 0],
    mt: [0, null, null, -1],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    description: {
      fontSize: [1, 2],
      fontWeight: 'body',
      lineHeight: 1.9,
      pt: 2,
    },
  },
};
