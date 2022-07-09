import React from 'react';
import CourseContainer from '../../pages/CourseContainer';
import DocumentContainer from '../../pages/DocumentContainer';
import UsersContainer from '../../pages/UsersContainer';
import { DashboardIcon, DocumentIcon, UsersIcon } from './sidebarIcons';

const routeItems = [
  {
    key: 'courses',
    title: 'courses',
    icon: DashboardIcon,
    path: '/courses',
    component: <CourseContainer />
  },
  {
    key: 'document',
    title: 'document',
    icon: DocumentIcon,
    path: '/document',
    component: <DocumentContainer />
  },
  {
    key: 'users',
    title: 'users',
    icon: UsersIcon,
    path: '/users',
    component: <UsersContainer />
  }
];

export default routeItems;
