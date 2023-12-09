import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-товары.caption'),
          title: i18n.t('forms.application.sitemap.справочник-товары.title'),
          children: [{
            link: 'i-i-s-snezhana-8-поставщик-l',
            caption: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-snezhana-8-поставщик-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-snezhana-8-поставщик-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-snezhana-8-товар-l',
            caption: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-snezhana-8-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-snezhana-8-товар-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-snezhana-8-производитель-l',
            caption: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-snezhana-8-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-snezhana-8-производитель-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказ.caption'),
          title: i18n.t('forms.application.sitemap.заказ.title'),
          children: [{
            link: 'i-i-s-snezhana-8-заказ-l',
            caption: i18n.t('forms.application.sitemap.заказ.i-i-s-snezhana-8-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.заказ.i-i-s-snezhana-8-заказ-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-snezhana-8-доставка-l',
            caption: i18n.t('forms.application.sitemap.заказ.i-i-s-snezhana-8-доставка-l.caption'),
            title: i18n.t('forms.application.sitemap.заказ.i-i-s-snezhana-8-доставка-l.title'),
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиенты.caption'),
          title: i18n.t('forms.application.sitemap.клиенты.title'),
          children: [{
            link: 'i-i-s-snezhana-8-клиент-l',
            caption: i18n.t('forms.application.sitemap.клиенты.i-i-s-snezhana-8-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.клиенты.i-i-s-snezhana-8-клиент-l.title'),
            icon: 'book',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.менеджер.caption'),
          title: i18n.t('forms.application.sitemap.менеджер.title'),
          children: [{
            link: 'i-i-s-snezhana-8-менеджер-l',
            caption: i18n.t('forms.application.sitemap.менеджер.i-i-s-snezhana-8-менеджер-l.caption'),
            title: i18n.t('forms.application.sitemap.менеджер.i-i-s-snezhana-8-менеджер-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})