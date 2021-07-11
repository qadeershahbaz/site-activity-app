import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class PartnerRecordsConnection {
  readonly items?: (PartnerRecords | null)[];
  readonly nextToken?: string;
  constructor(init: ModelInit<PartnerRecordsConnection>);
}

export declare class PartnerRecords {
  readonly id: string;
  readonly entryDate: string;
  readonly amountReceived: number;
  readonly previousBalance: number;
  readonly totalAmount: number;
  readonly amountPaid: number;
  readonly amountPaidTo?: string;
  readonly balance: number;
  readonly remarks?: string;
  readonly partnerId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PartnerRecords>);
  static copyOf(source: PartnerRecords, mutator: (draft: MutableModel<PartnerRecords>) => MutableModel<PartnerRecords> | void): PartnerRecords;
}

export declare class Activity {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly userID: string;
  readonly userName: string;
  readonly amount?: number;
  readonly document?: (string | null)[];
  readonly hasDocument?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Activity>);
  static copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}

export declare class Partners {
  readonly id: string;
  readonly name: string;
  readonly group?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Partners>);
  static copyOf(source: Partners, mutator: (draft: MutableModel<Partners>) => MutableModel<Partners> | void): Partners;
}