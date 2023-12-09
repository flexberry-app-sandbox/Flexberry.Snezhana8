import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  изображение: DS.attr('string'),
  наименование: DS.attr('string'),
  свойства: DS.attr('string'),
  заказ: DS.belongsTo('i-i-s-snezhana-8-заказ', { inverse: null, async: false }),
  поставщик: DS.belongsTo('i-i-s-snezhana-8-поставщик', { inverse: null, async: false }),
  производитель: DS.belongsTo('i-i-s-snezhana-8-производитель', { inverse: null, async: false })
});

export let ValidationRules = {
  изображение: {
    descriptionKey: 'models.i-i-s-snezhana-8-товар.validations.изображение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-snezhana-8-товар.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  свойства: {
    descriptionKey: 'models.i-i-s-snezhana-8-товар.validations.свойства.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-snezhana-8-товар.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  поставщик: {
    descriptionKey: 'models.i-i-s-snezhana-8-товар.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-snezhana-8-товар.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-snezhana-8-товар', {
    наименование: attr('Наименование', { index: 0 }),
    изображение: attr('Изображение', { index: 1 }),
    свойства: attr('Свойства', { index: 2 }),
    поставщик: belongsTo('i-i-s-snezhana-8-поставщик', 'Поставщик', {
      поставщик: attr('Поставщик', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'поставщик' }),
    заказ: belongsTo('i-i-s-snezhana-8-заказ', 'Заказ', {
      дата: attr('Дата', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'дата' }),
    производитель: belongsTo('i-i-s-snezhana-8-производитель', 'Производитель', {
      производитель: attr('Производитель', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'производитель' })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-snezhana-8-товар', {
    наименование: attr('Наименование', { index: 0 }),
    изображение: attr('Изображение', { index: 1 }),
    свойства: attr('Свойства', { index: 2 }),
    поставщик: belongsTo('i-i-s-snezhana-8-поставщик', 'Поставщик', {
      поставщик: attr('Поставщик', { index: 3 })
    }, { index: -1, hidden: true }),
    заказ: belongsTo('i-i-s-snezhana-8-заказ', 'Дата', {
      дата: attr('Дата', { index: 4 })
    }, { index: -1, hidden: true }),
    производитель: belongsTo('i-i-s-snezhana-8-производитель', 'Производитель', {
      производитель: attr('Производитель', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
