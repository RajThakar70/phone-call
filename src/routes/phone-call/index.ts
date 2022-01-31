import { HTTPMethods } from 'fastify';
import { DemoCall } from './demo-call';


export default [
  {
    method: 'GET' as HTTPMethods,
    url: '/demo-call',
    handler: DemoCall.perform,
  },
];
