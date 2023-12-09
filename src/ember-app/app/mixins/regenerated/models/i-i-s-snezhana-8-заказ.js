import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерЗаказа: DS.attr('number'),
  доставка: DS.belongsTo('i-i-s-snezhana-8-доставка', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-snezhana-8-клиент', { inverse: null, async: false }),
  менеджер: DS.belongsTo('i-i-s-snezhana-8-менеджер', { inverse: null, async: false }),
  оплата: DS.hasMany('i-i-s-snezhana-8-оплата', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-snezhana-8-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-snezhana-8-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  доставка: {
    descriptionKey: 'models.i-i-s-snezhana-8-заказ.validations.доставка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-snezhana-8-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  менеджер: {
    descriptionKey: 'models.i-i-s-snezhana-8-заказ.validations.менеджер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оплата: {
    descriptionKey: 'models.i-i-s-snezhana-8-заказ.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-snezhana-8-заказ', {
    дата: attr('Дата', { index: 0 }),
    номерЗаказа: attr('Номер заказа', { index: 1 }),
    клиент: belongsTo('i-i-s-snezhana-8-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фамилия' }),
    менеджер: belongsTo('i-i-s-snezhana-8-менеджер', 'Менеджер', {
      фамилия: attr('Фамилия', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фамилия' }),
    доставка: belongsTo('i-i-s-snezhana-8-доставка', 'Доставка', {
      типДоставки: attr('Тип доставки', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'типДоставки' }),
    оплата: hasMany('i-i-s-snezhana-8-оплата', 'Табличная часть оплата', {
      способ: attr('Способ', { index: 0 }),
      дата: attr('Дата', { index: 1 }),
      сумма: attr('Сумма', { index: 2 })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-snezhana-8-заказ', {
    дата: attr('Дата', { index: 0 }),
    номерЗаказа: attr('Номер заказа', { index: 1 }),
    клиент: belongsTo('i-i-s-snezhana-8-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 2 })
    }, { index: -1, hidden: true }),
    менеджер: belongsTo('i-i-s-snezhana-8-менеджер', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true }),
    доставка: belongsTo('i-i-s-snezhana-8-доставка', 'Тип доставки', {
      типДоставки: attr('Тип доставки', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
