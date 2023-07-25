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
