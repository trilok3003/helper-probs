export const ROUTES: ({ path: string; borderTop: boolean, title: string; icon: string; class: string; badge: string; availableTo: { departments: number[] }; hideTo: any; badgeClass: string; isExternalLink: boolean; submenu: ({ path: string; title: string; icon: string; class: string; badge: string; badgeClass: string; isExternalLink: boolean; submenu: any[] })[] } | { path: string; title: string; availableTo: { departments: number[] }; icon: string; class: string; badge: string; badgeClass: string; isExternalLink: boolean; submenu: any[] })[] = [
  {
    path: '',
    title: 'Home',
    icon: 'fa fa-users',
    class: 'has-sub',
    badge: '',
    availableTo: {departments: [], environmentType: []},
    hideTo: {departments: [], environmentType: []},
    badgeClass: 'badge badge-pill badge-danger',
    isExternalLink: false,
    borderTop: true,
    submenu: [
      {
        path: '/home/recent-feeds',
        title: 'Recent Feeds',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/home/dashboard',
        title: 'Dashboards',
        icon: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/home/company-profile',
        title: 'Company Profile',
        icon: '',
        class: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Project',
    class: 'has-sub',
    icon: 'fa fa-users',
    badge: '',
    availableTo: {departments: [], environmentType: []},
    hideTo: {departments: [], environmentType: ['COMPANY']},
    badgeClass: 'badge badge-pill badge-danger',
    isExternalLink: false,
    submenu: [
      {
        path: '/project/jobs',
        title: 'Job',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/project/highway',
        title: 'Highway',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/project/structures',
        title: 'Structures',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Configurations',
    icon: 'fa fa-users',
    class: 'has-sub',
    badge: '',
    availableTo: {departments: [], environmentType: ['COMPANY']},
    badgeClass: 'badge badge-pill badge-danger',
    isExternalLink: false,
    submenu: [
      {
        path: '/configurations/general',
        title: 'General',
        icon: '',
        class: '',
        badge: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/configurations/authorities',
        title: 'Authorities',
        icon: '',
        class: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/configurations/roles',
        title: 'Roles',
        icon: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/configurations/duties',
        title: 'Duties',
        icon: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Policies',
    icon: 'fa fa-users',
    class: 'has-sub',
    badge: '',
    availableTo: {departments: [], environmentType: ['COMPANY']},
    badgeClass: 'badge badge-pill badge-danger',
    isExternalLink: false,
    submenu: [
      {
        path: '/human-resource/policies',
        title: 'Human Resource',
        icon: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/providers/policies',
        title: 'Provider',
        icon: '',
        class: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/equipments/policies',
        title: 'Equipment',
        icon: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/inventory/policies',
        title: 'Inventory',
        icon: '',
        class: '',
        badge: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  // {
  //   path: '',
  //   title: 'Devices',
  //   icon: 'fa fa-users',
  //   class: 'has-sub',
  //   badge: '',
  //   availableTo: {departments: []},
  //   badgeClass: 'badge badge-pill badge-danger',
  //   isExternalLink: false,
  //   submenu: [
  //     {
  //       path: '/devices/gps',
  //       title: 'GPS Device',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/devices/weighing',
  //       title: 'Weighing Device',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   title: 'Employees',
  //   icon: 'fa fa-users',
  //   class: 'has-sub',
  //   badge: '',
  //   availableTo: {departments: []},
  //   badgeClass: 'badge badge-pill badge-danger',
  //   isExternalLink: false,
  //   submenu: [
  //     {
  //       path: '/employees',
  //       title: 'Employees',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/employees/mark-attendance',
  //       title: 'Attendance',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/salary-sheet',
  //       title: 'Salaries',
  //       icon: '',
  //       class: '',
  //       badge: '',
  //       badgeClass: '',
  //       availableTo: {departments: []},
  //       isExternalLink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/policies',
  //       title: 'Policies',
  //       icon: '',
  //       class: '',
  //       availableTo: {departments: []},
  //       badge: '',
  //       badgeClass: '',
  //       isExternalLink: false,
  //       submenu: []
  //     }
  //   ]
  // },

  {
    path: '',
    title: 'Human Resource',
    icon: 'fa fa-users',
    class: 'has-sub',
    badge: '',
    availableTo: {departments: [], environmentType: []},
    badgeClass: 'badge badge-pill badge-danger',
    isExternalLink: false,
    submenu: [
      {
        path: '/human-resource',
        title: 'Employees',
        icon: '',
        class: '',
        availableTo: {departments: [], environmentType: []},
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/human-resource/attendance',
        title: 'Attendance',
        icon: '',
        class: '',
        hideTo: {departments: [], environmentType: []},
        badge: '',
        badgeClass: '',
        availableTo: {departments: [], environmentType: []},
        isExternalLink: false,
        submenu: []
      }, {
        path: '/human-resource/salaries',
        title: 'Salaries',
        icon: '',
        hideTo: {departments: [], environmentType: []},
        class: '',
        availableTo: {departments: [], environmentType: []},
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Providers',
    availableTo: {departments: [], environmentType: ['COMPANY']},
    icon: 'fa fa-truck',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/providers',
      title: 'List',
      icon: '',
      class: '',
      badge: '',
      badgeClass: '',
      availableTo: {departments: [], environmentType: ['COMPANY']},
      isExternalLink: false,
      submenu: []
    }
    ]
  },
  {
    path: '',
    title: 'Invoices',
    availableTo: {departments: [], environmentType: ['COMPANY']},
    icon: 'fa fa-truck',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '/invoices/sales',
        title: 'Sales',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        availableTo: {departments: []},
        isExternalLink: false,
        submenu: []
      }, {
        path: '/invoices/purchases',
        title: 'Purchases',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        availableTo: {departments: []},
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Devices',
    icon: 'fa fa-users',
    class: 'has-sub',
    badge: '',
    availableTo: {departments: []},
    badgeClass: 'badge badge-pill badge-danger',
    isExternalLink: false,
    submenu: [
      {
        path: '/devices/gps',
        title: 'GPS Device',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/devices/weighing',
        title: 'Weighing Device',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/payment-advices',
    title: 'Payment Advices',
    availableTo: {departments: [], environmentType: []},
    hideTo: {departments: [], environmentType: ['COMPANY']},
    icon: 'fa fa-truck',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  },

  {
    path: '/bank-accounts',
    title: 'Bank Accounts',
    availableTo: {departments: [], environmentType: ['COMPANY']},
    icon: 'fa fa-truck',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Cashbooks',
    availableTo: {departments: []},
    icon: 'fa fa-truck',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/cashbook',
      title: 'List',
      icon: '',
      class: '',
      badge: '',
      badgeClass: '',
      availableTo: {departments: []},
      isExternalLink: false,
      submenu: []
    }, {
      path: '/cashbook/vouchers',
      title: 'Cash Vouchers',
      icon: '',
      class: '',
      badge: '',
      badgeClass: '',
      availableTo: {departments: []},
      hideTo: {departments: [], environmentType: ['COMPANY']},
      isExternalLink: false,
      submenu: []
    }]
  },
  {
    path: '',
    title: 'Rates',
    availableTo: {departments: [], environmentType: ['HEADQUARTER']},
    hideTo: {departments: [], environmentType: ['COMPANY']},
    icon: 'fa fa-truck',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '/rates',
        title: 'Rates',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        availableTo: {departments: []},
        isExternalLink: false,
        submenu: []
      }, {
        path: '/rates/daily',
        title: 'Daily',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        availableTo: {departments: []},
        isExternalLink: false,
        submenu: []
      }, {
        path: '/rates/changes',
        title: 'Changes',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        availableTo: {departments: []},
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Production',
    availableTo: {departments: [], environmentType: []},
    hideTo: {departments: [], environmentType: ['COMPANY']},
    icon: 'fa fa-truck',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '/production/',
        title: 'Centers',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        availableTo: {departments: []},
        isExternalLink: false,
        submenu: []
      }, {
        path: '/production/dispatch',
        title: 'Dispatch',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        availableTo: {departments: []},
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Inventory',
    availableTo: {departments: [], environmentType: ['COMPANY']},
    icon: 'fa fa-truck',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '/inventory/purchase-orders',
        title: 'Purchase Advice',
        icon: '',
        class: '',
        availableTo: {departments: [], environmentType: []},
        badge: '',
        badgeClass: '',
        hideTo: {departments: [], environmentType: ['COMPANY']},
        isExternalLink: false,
        submenu: []
      }, {
        path: '/inventory/receiving',
        title: 'Receiving',
        icon: '',
        class: '',
        hideTo: {departments: [], environmentType: ['COMPANY']},
        availableTo: {departments: [], environmentType: []},
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/inventory/stores/material-inventory',
        title: 'Material Inventory',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        isExternalLink: false,
        submenu: []
      }, {
        path: '/inventory/requisitions',
        title: 'Requisition',
        icon: '',
        class: '',
        badge: '',
        hideTo: {departments: [], environmentType: ['COMPANY']},
        badgeClass: '',
        availableTo: {departments: [], environmentType: []},
        isExternalLink: false,
        submenu: []
      }, {
        path: '/inventory/issuing',
        title: 'Issuing',
        icon: '',
        class: '',
        badge: '',
        hideTo: {departments: [], environmentType: ['COMPANY']},
        badgeClass: '',
        availableTo: {departments: [], environmentType: []},
        isExternalLink: false,
        submenu: []
      }
    ]
  },

  // {
  //   path: 'locations',
  //   title: 'Locations',
  //   availableTo: {departments: []},
  //   icon: 'fa fa-truck',
  //   class: 'has-sub',
  //   badge: '',
  //   badgeClass: '',
  //   isExternalLink: false,
  //   submenu: []
  // },
  {
    path: '',
    title: 'Products & Services',
    availableTo: {departments: [], environmentType: ['COMPANY']},
    icon: 'fa fa-truck',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '/products',
        title: 'List',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/locations',
    title: 'Locations',
    icon: 'fa fa-truck',
    class: '',
    availableTo: {departments: [], environmentType: []},
    hideTo: {departments: [], environmentType: ['COMPANY']},
    badge: '',
    badgeClass: 'badge badge-pill badge-danger',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Equipments',
    icon: 'fa fa-truck',
    class: 'has-sub',
    availableTo: {departments: [], environmentType: []},
    badge: '',
    badgeClass: 'badge badge-pill badge-danger',
    isExternalLink: false,
    submenu: [
      {
        path: '/equipments',
        title: 'List',
        icon: '',
        class: '',
        badge: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/trips',
        title: 'Trips',
        hideTo: {departments: [], environmentType: ['COMPANY']},
        icon: '',
        class: '',
        availableTo: {departments: [], environmentType: []},
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/equipments/equipment-maintenance',
        title: 'Maintenance',
        icon: '',
        class: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/equipments/logs',
        title: 'Logs',
        icon: '',
        hideTo: {departments: [], environmentType: ['COMPANY']},
        class: '',
        availableTo: {departments: [], environmentType: []},
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/equipments/create-activity',
        title: 'Feed Logs',
        icon: '',
        class: '',
        hideTo: {departments: [], environmentType: ['COMPANY']},
        badge: '',
        availableTo: {departments: [], environmentType: []},
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/equipments/tickets',
        title: 'Renting',
        icon: '',
        hideTo: {departments: [], environmentType: ['COMPANY']},
        class: '',
        availableTo: {departments: [], environmentType: []},
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/equipments/categories',
        title: 'Categories',
        icon: '',
        class: '',
        badge: '',
        availableTo: {departments: [], environmentType: ['COMPANY']},
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'C & D Notes',
    icon: 'fa fa-truck',
    class: 'has-sub',
    availableTo: {departments: [], environmentType: []},
    hideTo: {departments: [], environmentType: ['COMPANY']},
    badge: '',
    badgeClass: 'badge badge-pill badge-danger',
    isExternalLink: false,
    submenu: [
      {
        path: '/notes/credit',
        title: 'Credit Notes',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/notes/debit',
        title: 'Debit Notes',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Service Inspection',
    icon: 'fa fa-truck',
    class: 'has-sub',
    availableTo: {departments: [], environmentType: []},
    hideTo: {departments: [], environmentType: ['COMPANY']},
    badge: '',
    badgeClass: 'badge badge-pill badge-danger',
    isExternalLink: false,
    submenu: [
      {
        path: '/service-inspection/service-provided',
        title: 'Service Provided',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/service-inspection/service-received',
        title: 'Service Received',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  // {
  //   path: '/mobile/field-app',
  //   title: 'Field App',
  //   icon: 'fa fa-truck',
  //   availableTo: {departments: []},
  //   class: '',
  //   badge: '',
  //   badgeClass: '',
  //   isExternalLink: false,
  //   submenu: []
  // }
];
