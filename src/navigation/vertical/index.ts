// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline',
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'mdi:email-outline',
    },
    {
      title: 'Webinar',
      icon: 'solar:play-stream-broken',
      badgeColor: 'success',
      children: [
        {
          title: 'Home',
          path: '/webinar'
        },
        {
          title: 'Schedule',
          path: '/components/schedule'
        },
        {
          title: 'Speakers',
          path: '/components/speakers'
        }
      ]
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'mdi:shield-outline',
    }
  ]
}

export default navigation
