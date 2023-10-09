// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'


const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline'
    },

    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'mdi:email-outline'
    },
    {
      title: 'Meducate Search',
      path: '/third-page/medicamentSearch',
      icon: 'mdi:pill'
    },
    {
      sectionTitle: 'Apps'
    },
    {
      title: 'Notes',
      path: '/apps/notes',
      icon: 'mdi:note-outline',
      subject: 'note-page',
      action: 'read'
    },
    {
      title: 'Chat',
      path: '/apps/chat',
      icon: 'mdi:message-outline',
      subject: 'chat-page',
      action: 'read'
    },
    {
      title: 'Webinar',
      icon: 'solar:play-stream-broken',
      badgeColor: 'success',
      children: [
        {
          title: 'single webinar',
          path: '/apps/webinar/single-webinar'
        },
        {
          title: 'Stage',
          path: '/apps/webinar/stage'
        },
        {
          title: 'schedule',
          path: '/apps/webinar/schedule'
        }
      ]
    },

    {
      title: 'Scientific Calendar',
      path: '/apps/scientific-calendar',
      icon: 'solar:calendar-line-duotone'
    },
    {
      title: 'Scientific Calendar',
      path: '/scientific-calendar',
      icon: 'solar:calendar-line-duotone'
    },
    {
      sectionTitle: 'Admin'
    },
    {
      title: 'Webinar',
      icon: 'mdi:acount',
      path: '/admin/webinar'
    }
  ]
}

export default navigation
