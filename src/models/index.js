// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PartnerRecords, Activity, Partners, PartnerRecordsConnection } = initSchema(schema);

export {
  PartnerRecords,
  Activity,
  Partners,
  PartnerRecordsConnection
};