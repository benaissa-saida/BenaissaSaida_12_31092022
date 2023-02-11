import { useEffect, useState } from "react";
import { capitalize } from "../../utils/textFormatter";

import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../../datas/Api/mockedData";

/**
 * Hook used to extract data from backendApi to feed the dashboard.
 * @param {string} userId
 * @param {string} service
 * @returns {undefined|Object|array.Object}
 */
export function useBackendApi(userId, service) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!userId) return;
    async function mockedData() {
      try {
        const consumeData = consumeDataByService(userId, service);

        setData(consumeData);
        setIsLoading(false);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    mockedData();
  }, [userId, service]);

  return { data, isLoading, error };
}

/**
 * Uses specialized functions to consume the data of each service.
 * @param {string} userId
 * @param {string} service
 * @returns {Undefined|Object|array.Object}
 */
function consumeDataByService(userId, service) {
  if (userId) {
    switch (service) {
      case "userInfos":
        return getUserInfosById(userId);
      case "performance":
        return getUserPerformancesById(userId);
      case "average-sessions":
        return getUserAverageSessionById(userId);
      case "activity":
        return getUserActivityById(userId);
      default:
        throw new Error("No service was found");
    }
  }
}

/**
 * @param {string} userId
 * @returns {Object}
 */
function getUserInfosById(userId) {
  for (let user of USER_MAIN_DATA) {
    if (user.id === userId) {
      return user;
    }
  }
}

/**
 * Returns the user's performance for PerformanceChart
 * @param {string} userId
 * @returns {array.Object}
 */
function getUserPerformancesById(userId) {
  for (let user of USER_PERFORMANCE) {
    if (user.userId === userId) {
      const performance = user.data.map((data) => {
        switch (data.kind) {
          case 1:
            return { ...data, kind: capitalize(user.kind[data.kind]) };
          case 2:
            return { ...data, kind: capitalize(user.kind[data.kind]) };
          case 3:
            return { ...data, kind: capitalize(user.kind[data.kind]) };
          case 4:
            return { ...data, kind: capitalize(user.kind[data.kind]) };
          case 5:
            return { ...data, kind: capitalize(user.kind[data.kind]) };
          case 6:
            return { ...data, kind: capitalize(user.kind[data.kind]) };
          default:
            return { ...data };
        }
      });
      return performance;
    }
  }
}

/**
 * Returns the user's average session for AverageSessionLineChart
 * @param {string} userId
 * @returns {array.Object}
 */
function getUserAverageSessionById(userId) {
  for (let user of USER_AVERAGE_SESSIONS) {
    if (user.userId === userId) {
      const averageSession = user.sessions.map((data) => {
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      return averageSession;
    }
  }
}

/**
 * Returns the user's activity for ActivityBarChart
 * @param {string} userId
 * @returns {array.Object}
 */
function getUserActivityById(userId) {
  for (let user of USER_ACTIVITY) {
    if (user.userId === userId) {
      const data = user.sessions;
      for (let i = 0; i < data.length; i++) {
        data[i].day = i + 1;
      }
      return data;
    }
  }
}
