// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Activity, Partners } = initSchema(schema);

export {
  Activity,
  Partners
};