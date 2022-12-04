import { ConfigFileEntries } from '@server-lib/config/config.type';

import {
  UserPreferenceCollection,
  UserPreferenceValue
} from 'ets2-dashboard-core/dist/configuration/user-preference/user-preference.type.js';

export const toUserPreferencesCollection = (
  configFileEntries: ConfigFileEntries
) => {
  const collection = new UserPreferenceCollection();
  Object.entries(configFileEntries).map(
    ([userPreferenceId, userPreferenceValue]) => {
      collection.set(userPreferenceId, {
        id: userPreferenceId,
        value: userPreferenceValue as UserPreferenceValue
      });
    }
  );

  return collection;
};
