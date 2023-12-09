import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhana-8-менеджер', 'Unit | Serializer | i-i-s-snezhana-8-менеджер', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-snezhana-8-менеджер',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-snezhana-8-способ1',
    'transform:i-i-s-snezhana-8-тип-доставки',

    'model:i-i-s-snezhana-8-доставка',
    'model:i-i-s-snezhana-8-заказ',
    'model:i-i-s-snezhana-8-клиент',
    'model:i-i-s-snezhana-8-менеджер',
    'model:i-i-s-snezhana-8-оплата',
    'model:i-i-s-snezhana-8-поставщик',
    'model:i-i-s-snezhana-8-производитель',
    'model:i-i-s-snezhana-8-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
