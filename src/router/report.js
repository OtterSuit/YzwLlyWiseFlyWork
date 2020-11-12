export default [
  {
    path: 'financial',
    name: 'Financial',
    component: () => import('@/views/report/financial/index'),
    meta: { title: '财务核算统计' }
  },
  {
    path: 'workload',
    name: 'Workload',
    component: () => import('@/views/report/workload/index'),
    meta: { title: '工作量统计' }
  },
  {
    path: 'quality',
    name: 'QualityReport',
    component: () => import('@/views/report/quality/index'),
    meta: { title: '质量监测统计' }
  }
]
