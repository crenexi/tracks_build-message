const blockIds = {
  template: 'input_template',
  conversation: 'input_convo',
  signage: {
    site: 'site',
    zone: 'zone',
    quantity: 'quantity',
    request: 'request',
    tags: 'tags',
  },
  equipment: {
    equipDesc: 'equipment-desc',
    equipZone: 'equipment-zone',
    equipIssue: 'equipment-issue',
    accountManager: 'account-manager',
    tehnicians: 'technicians',
    picsReminder: 'next-steps',
  },
  qcStarting: {
    greeting: 'greeting',
    memo: 'memo',
  },
  qcRemarks: {
    infoRemarks: 'info-remarks',
    landscapeRemarks: 'landscape-remarks',
    shiftRemarks: 'shift-remarks',
    inventoryRemarks: 'inventory-remarks',
    utdDescription: 'description',
    utdLandscape: 'landscape',
    utdClientSync: 'client-sync',
    utdAccess: 'access',
    utdSignage: 'signage',
    utdShelving: 'shelving',
    utdDiscard: 'discard',
    utdTaskList: 'task-list',
    utdTaskOrder: 'task-order',
    utdTiming: 'timing',
    utdICLevels: 'ic-levels',
    utdICLayout: 'ic-layout',
    utdICUtils: 'ic-utils',
  },
  trainee: {
    operator: 'operator',
    trainDate: 'train-date',
    listTrainScope: 'list-train-scope',
    listTrainNext: 'list-train-next',
    listWentWell: 'list-went-well',
  },
  order: {
    orderId: 'order-id',
    orderRecap: 'order-recap',
    deliveryDate: 'delivery-date',
    listUnavailable: 'items-unavailable',
    listChained: 'list-chained',
    listICNeeds: 'list-adjustment-needs',
    listEdits: 'list-edits-made',
    itemsPickup: 'items-pickup',
    auditCheck: 'audit-check',
  },
  dro: {
    opsGeneralMemo: 'ops-general-memo',
    opsClientMemo: 'ops-client-memo',
    opsDoneMemo: 'ops-done-memo',
    deliveryMissing: 'delivery-missing',
    deliveryDiscarded: 'delivery-discarded',
    deliveryReturned: 'delivery-returned',
    prodAdjustments: 'prod-adjustments',
    prodExpired: 'prod-expired',
    prodPickup: 'prod-pickup',
  },
};

export default blockIds;
