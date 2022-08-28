import * as Updates from 'expo-updates';
import { useEffect, useState } from 'react';

export const useAppUpdate = () => {
  const [isLastVersion, setIsLastVersion] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setIsLastVersion(true);

      return;
    }

    Updates.checkForUpdateAsync()
      .then(update => {
        if (!update.isAvailable) {
          setIsLastVersion(true);

          return;
        }

        Updates.fetchUpdateAsync()
          .then(lastUpdate => {
            if (!lastUpdate.isNew) {
              setIsLastVersion(true);

              return;
            }

            Updates.reloadAsync();
          })
          .catch(() => setIsLastVersion(true));
      })
      .catch(() => setIsLastVersion(true));
  }, []);

  return { isLastVersion };
};
