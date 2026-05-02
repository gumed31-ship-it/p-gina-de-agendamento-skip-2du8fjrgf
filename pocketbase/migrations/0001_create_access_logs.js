migrate(
  (app) => {
    const collection = new Collection({
      name: 'access_logs',
      type: 'base',
      createRule: '',
      listRule: null,
      viewRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'path', type: 'text', required: true },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('access_logs')
    app.delete(collection)
  },
)
