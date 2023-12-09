import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-snezhana-8-доставка-l');
  this.route('i-i-s-snezhana-8-доставка-e',
  { path: 'i-i-s-snezhana-8-доставка-e/:id' });
  this.route('i-i-s-snezhana-8-доставка-e.new',
  { path: 'i-i-s-snezhana-8-доставка-e/new' });
  this.route('i-i-s-snezhana-8-заказ-l');
  this.route('i-i-s-snezhana-8-заказ-e',
  { path: 'i-i-s-snezhana-8-заказ-e/:id' });
  this.route('i-i-s-snezhana-8-заказ-e.new',
  { path: 'i-i-s-snezhana-8-заказ-e/new' });
  this.route('i-i-s-snezhana-8-клиент-l');
  this.route('i-i-s-snezhana-8-клиент-e',
  { path: 'i-i-s-snezhana-8-клиент-e/:id' });
  this.route('i-i-s-snezhana-8-клиент-e.new',
  { path: 'i-i-s-snezhana-8-клиент-e/new' });
  this.route('i-i-s-snezhana-8-менеджер-l');
  this.route('i-i-s-snezhana-8-менеджер-e',
  { path: 'i-i-s-snezhana-8-менеджер-e/:id' });
  this.route('i-i-s-snezhana-8-менеджер-e.new',
  { path: 'i-i-s-snezhana-8-менеджер-e/new' });
  this.route('i-i-s-snezhana-8-поставщик-l');
  this.route('i-i-s-snezhana-8-поставщик-e',
  { path: 'i-i-s-snezhana-8-поставщик-e/:id' });
  this.route('i-i-s-snezhana-8-поставщик-e.new',
  { path: 'i-i-s-snezhana-8-поставщик-e/new' });
  this.route('i-i-s-snezhana-8-производитель-l');
  this.route('i-i-s-snezhana-8-производитель-e',
  { path: 'i-i-s-snezhana-8-производитель-e/:id' });
  this.route('i-i-s-snezhana-8-производитель-e.new',
  { path: 'i-i-s-snezhana-8-производитель-e/new' });
  this.route('i-i-s-snezhana-8-товар-l');
  this.route('i-i-s-snezhana-8-товар-e',
  { path: 'i-i-s-snezhana-8-товар-e/:id' });
  this.route('i-i-s-snezhana-8-товар-e.new',
  { path: 'i-i-s-snezhana-8-товар-e/new' });
});

export default Router;
