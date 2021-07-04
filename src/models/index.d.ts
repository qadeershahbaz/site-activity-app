import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Activity {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly userID: string;
  readonly userName: string;
  readonly amount?: number;
  readonly SubActivities?: (SubActivity | null)[];
  readonly Documents?: (Document | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Activity>);
  static copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}

export declare class Document {
  readonly id: string;
  readonly name: string;
  readonly secret?: boolean;
  readonly activityID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Document>);
  static copyOf(source: Document, mutator: (draft: MutableModel<Document>) => MutableModel<Document> | void): Document;
}

export declare class SubActivity {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly amount?: number;
  readonly activityID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SubActivity>);
  static copyOf(source: SubActivity, mutator: (draft: MutableModel<SubActivity>) => MutableModel<SubActivity> | void): SubActivity;
}