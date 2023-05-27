import {
  EmailVerificationStatuses,
  EventsDataIds,
  EventsDataTypes,
  OTDateTime,
  OTEntityId,
  OTNumberValue,
  ScenarioName,
  SubscriptionTypes,
  UserNotificationStatuses,
  UserTypes,
} from '../commonTypes';

import { Scenario } from './scenarioTypes';

export interface UserMembership {
  subscriptionStartDate: OTDateTime;
  subscriptionExpirationDate: OTDateTime;
  subscriptionType: SubscriptionTypes;
  grossPayment: number;
  paymentFee: number;
  managedLimit: number;
}
export interface UserPersonalInfo {
  firstName: string;
  lastName: string;
}
export interface EventsOnChart {}
export type UserPreferencesValueMapEventsOnChart = Record<ScenarioName, EventsOnChart[]>;
export interface EventsData {
  id: EventsDataIds;
  name: string;
  type: EventsDataTypes;
  percent: number;
  durationYears: number;
  startYear: number;
  active?: boolean;
  onlyNegativeValue?: boolean;
}
export type UserPreferencesValueMapEventsData = Record<ScenarioName, EventsData[]>;
export interface UserPreferencesValueMapGuideInitialData {
  yearBorn: number;
  annualIncome: number;
  savingsPerMonth: number;
  totalSavings: number;
  married: boolean;
  spouseIncome: number;
}
export interface UserPreferencesValueMap {
  showXAxisYear: boolean;
  showNegativeBalances: boolean;
  compactMode: boolean;
  defaultGrowthRate: number;
  editColumnsState: {
    showIncomeGrowthColumn: boolean;
    showExpenseGrowthColumn: boolean;
    showAccountContributionColumn: boolean;
    showAccountTaxColumn: boolean;
  };
  autoZoomProgress: boolean;
  eventsOnChart: UserPreferencesValueMapEventsOnChart;
  eventsData: UserPreferencesValueMapEventsData;
  warning_contrib: boolean;
  showRetirementAge: boolean;
  limit401kContribs: boolean;
  showScenarioNotes: boolean;
  showBasicSettingsInCenter: boolean;
  newFeatureEventsNotyConfirmed: boolean;
  enableEvents: boolean;
  enableGraphMouseOverCapability: boolean;
  showAverageGrowth: boolean;
  guideInitialData: UserPreferencesValueMapGuideInitialData;
  currencySymbol: string;
  autoCalcAndSave: boolean;
  advancedTrialCTACount: number;
  deflatePast: boolean;
  inBeta: boolean;
  useProgressForAnalysis: boolean;
  progressReminderDismiss: OTDateTime;
  viewActualDollars: boolean;
  viewPOI: boolean;
  autoSelectNumber: boolean;
  allowClientEditDefaultScenario: boolean;
  advancedAnalysis: boolean;
}
export interface UserPreferences {
  betaToolsEnabled: boolean;
  showAdditionalData: boolean;
  defaultScenario: ScenarioName;
  valueMap: UserPreferencesValueMap;
}
export interface UserActivity {
  numberOfSavingData: number;
  numberOfRecalculates: number;
  lastNotificationsVersionViewed: number;
  numberOfGuidedEntries: number;
  numberOfQuickStarts: number;
}
export type UserScenariosMap = Record<ScenarioName, Scenario>;
export interface ScenariosCalcsMap {
  lastQuickSim_trajectory: OTNumberValue;
  lastQuickSim_above0: OTNumberValue;
  initialEndBalance: OTNumberValue;
}
export type UserScenariosCalcsMap = Record<ScenarioName, ScenariosCalcsMap>;
export interface UserCommonScenarioDataReward {
  date: OTDateTime;
  rewardID: number;
}
export interface UserNotification {
  notificationId?: string;
  notyGroupId: string;
  status: UserNotificationStatuses;
  updateDate?: OTDateTime;
  initiationDate?: OTDateTime;
}
export type UserNotifcations = Record<string, UserNotification>;
export interface UserSchema {
  membership: UserMembership;
  personalInfo: UserPersonalInfo;
  _id: OTEntityId;
  className: string;
  password: string;
  isMfaEnabled: boolean;
  createDateTime: OTDateTime;
  updateDateTime: OTDateTime;
  lastLoginTime: OTDateTime;
  resetPassword: boolean;
  loginCount: number;
  userType: UserTypes;
  subscriptionType: SubscriptionTypes;
  emailVerificationStatus: EmailVerificationStatuses;
  preferences: UserPreferences;
  userActivity: UserActivity;
  scenariosMap: UserScenariosMap;
  scenariosCalcsMap: UserScenariosCalcsMap;
  commonScenarioData: {
    rewards: UserCommonScenarioDataReward[];
  };
  metaData: {
    keyValues: {
      Bowser: string;
      Referer: string;
    };
  };
  userNotifcations: UserNotifcations;
}
