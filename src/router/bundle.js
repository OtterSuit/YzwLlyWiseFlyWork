export default [
  {
    path: 'audit',
    name: 'Audit',
    component: () => import('@/views/bundle/audit/index'),
    meta: { title: '审核' }
  },
  {
    path: 'packet',
    name: 'Packet',
    component: () => import('@/views/bundle/packet/index'),
    meta: { title: '封包' }
  },
  {
    path: 'history',
    name: 'History',
    component: () => import('@/views/bundle/history/index'),
    meta: { title: '历史记录' }
  }
]
