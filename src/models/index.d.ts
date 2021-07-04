import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Activity {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly userID: string;
  readonly userName: string;
  readonly amount?: number;
  readonly document?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Activity>);
  static copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}

export declare class SubActivity {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly amount?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SubActivity>);
  static copyOf(source: SubActivity, mutator: (draft: MutableModel<SubActivity>) => MutableModel<SubActivity> | void): SubActivity;
}