import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Menu, MenuItem, HomeLogo, Icon } from '@dtv/react';
const globoBug = '/dtv-assets/menu/globo-bug.png';
const avatar = '/dtv-assets/menu/avatar.png';
const programLogo = '/dtv-assets/menu/program-logo-2.png';
const weather = '/dtv-assets/menu/weather.png';

const avatarStyle: CSSProperties = {
  width: 40,
  height: 40,
  objectFit: 'cover',
  borderRadius: '50%',
  display: 'block'
};

const iconStyle: CSSProperties = {
  width: 40,
  height: 40,
  objectFit: 'contain',
  display: 'block'
};

const logoStyle: CSSProperties = {
  width: 48,
  height: 48,
  objectFit: 'contain',
  display: 'block',
  mixBlendMode: 'screen'
};

const meta: Meta<typeof Menu> = {
  title: 'DTV/Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 40,
          background: '#0c0c0f',
          minHeight: 200
        }}
      >
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Home: Story = {
  name: 'Home (configured)',
  render: () => (
    <Menu
      aria-label="Menu principal"
      start={
        <>
          <MenuItem
            icon={<img src={avatar} alt="" style={avatarStyle} />}
            aria-label="Perfil"
          />
          <MenuItem
            icon={<Icon name="clock" size="lg" />}
            aria-label="Programação"
          />
          <MenuItem
            icon={<img src={weather} alt="" style={iconStyle} />}
            title="Previsão do tempo"
            subtitle="São Paulo, SP"
            aria-label="Previsão do tempo"
          />
        </>
      }
      end={
        <>
          <MenuItem
            align="end"
            icon={<img src={programLogo} alt="" style={logoStyle} />}
            title="Copa do Mundo: Equador x Argentina"
            subtitle="A seguir Central da Copa"
            aria-label="Copa do Mundo: Equador x Argentina"
          />
          <HomeLogo src={globoBug} aria-label="Início" />
        </>
      }
    />
  )
};

export const LooseRails: Story = {
  name: 'Second level (loose rails)',
  render: () => (
    <Menu
      aria-label="Menu principal"
      start={
        <>
          <MenuItem
            icon={<img src={avatar} alt="" style={avatarStyle} />}
            aria-label="Perfil"
          />
          <MenuItem
            icon={<Icon name="clock" size="lg" />}
            aria-label="Programação"
          />
          <MenuItem
            icon={<img src={weather} alt="" style={iconStyle} />}
            aria-label="Previsão do tempo"
          />
        </>
      }
      end={
        <>
          <MenuItem
            align="end"
            icon={<img src={programLogo} alt="" style={logoStyle} />}
            aria-label="Programa ao vivo"
          />
          <HomeLogo src={globoBug} aria-label="Início" />
        </>
      }
    />
  )
};
