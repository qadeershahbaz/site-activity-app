// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Activity, Document, SubActivity } = initSchema(schema);

export {
  Activity,
  Document,
  SubActivity
};