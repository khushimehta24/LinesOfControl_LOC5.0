// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'create',
    path: '/dashboard/create',
    icon: icon('ic_create'),
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: icon('ic_user'),
  // },
  {
    title: 'event',
    path: '/dashboard/event',
    icon: icon('ic_event'),
  },
  {
    title: 'map',
    path: '/dashboard/map',
    icon: icon('ic_map'),
  },
  {
    title: 'rent',
    path: '/dashboard/rent',
    icon: icon('ic_cart'),
  },
  {
    title: 'Chat',
    path: '/dashboard/chat',
    icon: icon('ic_lock'),
  },
  {
    title: 'Calendar',
    path: '/dashboard/calendar',
    icon: icon('ic_calendar'),
  },
];

export default navConfig;
