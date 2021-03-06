import { Icon } from '@iconify/react';
import calendarOutline from '@iconify/icons-eva/calendar-outline';
import pieChartOutline from '@iconify/icons-eva/pie-chart-outline';
import peopleOutline from '@iconify/icons-eva/people-outline';
import folderOutline from '@iconify/icons-eva/folder-outline';
import barChartFill from '@iconify/icons-eva/bar-chart-fill';
import checkmarkSquareOutline from '@iconify/icons-eva/checkmark-square-outline';
import fileTextOutline from '@iconify/icons-eva/file-text-outline';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(calendarOutline)
  },
  {
    title: 'definitions',
    path: '/dashboard/user',
    icon: getIcon(pieChartOutline)
  },
  {
    title: 'clients',
    path: '/dashboard/clients',
    icon: getIcon(peopleOutline)
  },
  {
    title: 'folders',
    path: '/dashboard/folders',
    icon: getIcon(folderOutline)
  },
  {
    title: 'account activities',
    path: '/dashboard/accountActivities',
    icon: getIcon(barChartFill)
  },
  {
    title: 'tasks',
    path: '/dashboard/tasks',
    icon: getIcon(checkmarkSquareOutline)
  },
  {
    title: 'documents',
    path: '/dashboard/documents',
    icon: getIcon(fileTextOutline)
  }
];

export default sidebarConfig;
