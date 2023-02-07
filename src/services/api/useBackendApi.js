import { useEffect, useState } from "react";
import { capitalize } from "../../utils/textFormatter";

const baseUrl = process.env.REACT_APP_BASE_URL;

/**
 * Hook used to extract data from backendApi to feed the dashboard.
 * @param {string} url
 * @returns {undefined|Object}
 */
export function useBackendApi(endpoint, service) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!endpoint) return;
    setIsLoading(true);
    async function fetchData() {
      try {
        const url = `${baseUrl}/${endpoint}`;

        const response = await fetch(url);

        const data = await response.json();
        const consumeData = consumeDataByService(data, service);

        setData(consumeData);
        setIsLoading(false);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [endpoint, service]);

  return { data, isLoading, error };
}

/**
 * Uses specialized functions to consume the data of each service.
 * @param {Object} data
 * @param {string} service
 * @returns {undefined|string|number|Object|array.Object}
 */
function consumeDataByService(data, service) {
  if (data) {
    switch (service) {
      case "performance":
        return getUserPerformances(data.data);
      case "average-sessions":
        return getUserAverageSession(data.data);
      case "activity":
        return getUserActivity(data.data);
      case "userInfos":
        return getUserInfos(data.data);
      default:
        throw new Error("No service was found");
    }
  }
}

/**
 * @param {Object} userData
 * @returns {object}
 */
function getUserInfos(userData) {
  return userData;
}

/**
 * Returns the user's performance for PerformanceChart
 * @param {Object} userData
 * @returns {array.Object}
 */
function getUserPerformances(userData) {
  const performance = userData.data.map((data) => {
    switch (data.kind) {
      case 1:
        return { ...data, kind: capitalize(userData.kind[data.kind]) };
      case 2:
        return { ...data, kind: capitalize(userData.kind[data.kind]) };
      case 3:
        return { ...data, kind: capitalize(userData.kind[data.kind]) };
      case 4:
        return { ...data, kind: capitalize(userData.kind[data.kind]) };
      case 5:
        return { ...data, kind: capitalize(userData.kind[data.kind]) };
      case 6:
        return { ...data, kind: capitalize(userData.kind[data.kind]) };
      default:
        return { ...data };
    }
  });
  return performance;
}

/**
 * Returns the user's average session for AverageSessionLineChart
 * @param {Object} userData
 * @returns {array.Object}
 */
function getUserAverageSession(userData) {
  const averageSession = userData.sessions.map((data) => {
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

/**
 * Returns the user's activity for ActivityBarChart
 * @param {Object} userData
 * @returns {array.Object}
 */
function getUserActivity(userData) {
  const data = userData.sessions;
  for (let i = 0; i < data.length; i++) {
    data[i].day = i + 1;
  }
  return data;
}
