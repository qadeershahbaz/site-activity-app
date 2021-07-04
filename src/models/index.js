// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Activity, SubActivity } = initSchema(schema);

export {
  Activity,
  SubActivity
};