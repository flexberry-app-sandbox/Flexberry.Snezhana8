import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhana-8-заказ', 'Unit | Model | i-i-s-snezhana-8-заказ', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
