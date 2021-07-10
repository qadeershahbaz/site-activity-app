// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Activity, Partners, PartnerRecords } = initSchema(schema);

export {
  Activity,
  Partners,
  PartnerRecords
};