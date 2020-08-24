const providers: any[] = [
  { provide: 'environment', useValue: 'Development' },
  { provide: 'timeslotUrl', useValue: 'https://api.jsonbin.io/b/5f3a9a494d93991036169e3f' },
  { provide: 'sessionUrl', useValue: 'https://api.jsonbin.io/b/5f43e462993a2e110d356b66' }
];

export const ENV_PROVIDERS = providers;

export const environment = {
  production: false
};
