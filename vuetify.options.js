import LeagueIcon from '~/components/Icons/leagues'
import BlueEssenceIcon from '~/components/Icons/blueEssence'
import OrangeEssenceIcon from '~/components/Icons/orangeEssence'
import RpIcon from '~/components/Icons/rp'
import IconsIcon from '~/components/Icons/icons'

export default {
  icons: {
    iconfont: 'mdiSvg',
  },
  icons: {
    values: {
      league: {
        component: LeagueIcon,
      },
      blueEssence: {
        component: BlueEssenceIcon,
      },
      orangeEssence: {
        component: OrangeEssenceIcon,
      },
      riotpoints: {
        component: RpIcon,
      },
      icons: {
        component: IconsIcon,
      },
    },
  },
  theme: {
    themes: {
      light: {
        primary: '#e2dfce',
        secondary: '#b0bec5',
        accent: '#fdfa77',
        accent2: '#229fe1',
        accent3: '#c37e09',
        instagram: '#C13584',
        discord: '#7289da',
        facebook: '#3b5998',
        twitter: '#0084b4',
        whatsapp: '#128C7E',
        error: '#b71c1c',
        opposite: '#44465b',
        light: '#e2dfce',
        dark: '#44465b',
      },
      dark: {
        primary: '#44465b',
        secondary: '#b0bec5',
        accent: '#fdfa77',
        accent2: '#229fe1',
        accent3: '#c37e09',
        instagram: '#C13584',
        discord: '#7289da',
        facebook: '#3b5998',
        twitter: '#0084b4',
        whatsapp: '#128C7E',
        error: '#b71c1c',
        opposite: '#e2dfce',
        light: '#e2dfce',
        dark: '#44465b',
      },
    },
    light: true,
  },
}
