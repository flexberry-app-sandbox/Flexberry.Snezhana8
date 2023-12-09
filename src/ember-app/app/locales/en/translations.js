import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSnezhana_8ДоставкаLForm from './forms/i-i-s-snezhana-8-доставка-l';
import IISSnezhana_8ЗаказLForm from './forms/i-i-s-snezhana-8-заказ-l';
import IISSnezhana_8КлиентLForm from './forms/i-i-s-snezhana-8-клиент-l';
import IISSnezhana_8МенеджерLForm from './forms/i-i-s-snezhana-8-менеджер-l';
import IISSnezhana_8ПоставщикLForm from './forms/i-i-s-snezhana-8-поставщик-l';
import IISSnezhana_8ПроизводительLForm from './forms/i-i-s-snezhana-8-производитель-l';
import IISSnezhana_8ТоварLForm from './forms/i-i-s-snezhana-8-товар-l';
import IISSnezhana_8ДоставкаEForm from './forms/i-i-s-snezhana-8-доставка-e';
import IISSnezhana_8ЗаказEForm from './forms/i-i-s-snezhana-8-заказ-e';
import IISSnezhana_8КлиентEForm from './forms/i-i-s-snezhana-8-клиент-e';
import IISSnezhana_8МенеджерEForm from './forms/i-i-s-snezhana-8-менеджер-e';
import IISSnezhana_8ПоставщикEForm from './forms/i-i-s-snezhana-8-поставщик-e';
import IISSnezhana_8ПроизводительEForm from './forms/i-i-s-snezhana-8-производитель-e';
import IISSnezhana_8ТоварEForm from './forms/i-i-s-snezhana-8-товар-e';
import IISSnezhana_8ДоставкаModel from './models/i-i-s-snezhana-8-доставка';
import IISSnezhana_8ЗаказModel from './models/i-i-s-snezhana-8-заказ';
import IISSnezhana_8КлиентModel from './models/i-i-s-snezhana-8-клиент';
import IISSnezhana_8МенеджерModel from './models/i-i-s-snezhana-8-менеджер';
import IISSnezhana_8ОплатаModel from './models/i-i-s-snezhana-8-оплата';
import IISSnezhana_8ПоставщикModel from './models/i-i-s-snezhana-8-поставщик';
import IISSnezhana_8ПроизводительModel from './models/i-i-s-snezhana-8-производитель';
import IISSnezhana_8ТоварModel from './models/i-i-s-snezhana-8-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-snezhana-8-доставка': IISSnezhana_8ДоставкаModel,
    'i-i-s-snezhana-8-заказ': IISSnezhana_8ЗаказModel,
    'i-i-s-snezhana-8-клиент': IISSnezhana_8КлиентModel,
    'i-i-s-snezhana-8-менеджер': IISSnezhana_8МенеджерModel,
    'i-i-s-snezhana-8-оплата': IISSnezhana_8ОплатаModel,
    'i-i-s-snezhana-8-поставщик': IISSnezhana_8ПоставщикModel,
    'i-i-s-snezhana-8-производитель': IISSnezhana_8ПроизводительModel,
    'i-i-s-snezhana-8-товар': IISSnezhana_8ТоварModel
  },

  'application-name': 'Snezhana_8',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Snezhana_8',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Snezhana_8',
          title: 'Snezhana_8'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'справочник-товары': {
          caption: 'Справочник товары',
          title: 'Справочник товары',
          'i-i-s-snezhana-8-поставщик-l': {
            caption: 'Поставщик',
            title: 'Поставщик'
          },
          'i-i-s-snezhana-8-товар-l': {
            caption: 'Товар',
            title: 'Товар'
          },
          'i-i-s-snezhana-8-производитель-l': {
            caption: 'Производитель',
            title: 'Производитель'
          }
        },
        заказ: {
          caption: 'Заказ',
          title: 'Заказ',
          'i-i-s-snezhana-8-заказ-l': {
            caption: 'Заказ',
            title: 'Заказ'
          },
          'i-i-s-snezhana-8-доставка-l': {
            caption: 'Доставка',
            title: 'Доставка'
          }
        },
        клиенты: {
          caption: 'Клиенты',
          title: 'Клиенты',
          'i-i-s-snezhana-8-клиент-l': {
            caption: 'Клиент',
            title: 'Клиент'
          }
        },
        менеджер: {
          caption: 'Менеджер',
          title: 'Менеджер',
          'i-i-s-snezhana-8-менеджер-l': {
            caption: 'Менеджер',
            title: 'Менеджер'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-snezhana-8-доставка-l': IISSnezhana_8ДоставкаLForm,
    'i-i-s-snezhana-8-заказ-l': IISSnezhana_8ЗаказLForm,
    'i-i-s-snezhana-8-клиент-l': IISSnezhana_8КлиентLForm,
    'i-i-s-snezhana-8-менеджер-l': IISSnezhana_8МенеджерLForm,
    'i-i-s-snezhana-8-поставщик-l': IISSnezhana_8ПоставщикLForm,
    'i-i-s-snezhana-8-производитель-l': IISSnezhana_8ПроизводительLForm,
    'i-i-s-snezhana-8-товар-l': IISSnezhana_8ТоварLForm,
    'i-i-s-snezhana-8-доставка-e': IISSnezhana_8ДоставкаEForm,
    'i-i-s-snezhana-8-заказ-e': IISSnezhana_8ЗаказEForm,
    'i-i-s-snezhana-8-клиент-e': IISSnezhana_8КлиентEForm,
    'i-i-s-snezhana-8-менеджер-e': IISSnezhana_8МенеджерEForm,
    'i-i-s-snezhana-8-поставщик-e': IISSnezhana_8ПоставщикEForm,
    'i-i-s-snezhana-8-производитель-e': IISSnezhana_8ПроизводительEForm,
    'i-i-s-snezhana-8-товар-e': IISSnezhana_8ТоварEForm
  },

});

export default translations;
