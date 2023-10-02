"use client";

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { propertyReducer } from "../_reducers/propertyReducer";
import { getAllProperties } from "../_utils/propertyUtils";
import { ACTIONS } from "../_actions/propertyActions";

const LayoutContext = createContext([]);
const SetLayoutContext = createContext(() => { });
const PropertyContext = createContext([]);
const CurrentDataContext = createContext([]);
const PropertyDispatchContext = createContext(() => { });
const LoadingContext = createContext(true);
const ClickContext = createContext(true);
const SetClickContext = createContext(() => { });
const ErrorContext = createContext(null);

export function useProperty() {
  return useContext(PropertyContext);
}

export function useDispatch() {
  return useContext(PropertyDispatchContext);
}

export function useCurrentData() {
  return useContext(CurrentDataContext);
}

export function useLayout() {
  return useContext(LayoutContext);
}

export function useSetLayout() {
  return useContext(SetLayoutContext);
}

export function useLoading() {
  return useContext(LoadingContext);
}

export function useError() {
  return useContext(ErrorContext);
}

export function useClick() {
  return useContext(ClickContext);
}

export function useSetClick() {
  return useContext(SetClickContext);
}

const PropertyProvider = ({ children }) => {
  const [currentData, dispatch] = useReducer(propertyReducer, []);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [layout, setLayout] = useState(1);
  const [clicked, setClicked] = useState(true);

  useEffect(() => {
    const getPropertiesFunction = async () => {
      let [data, error] = await getAllProperties();
      console.log({ data, error })
      if (data !== null) {
        setProperties(data);
        dispatch({
          type: ACTIONS.ADD_PROPERTIES, payload: { data }
        })
      } else {
        setError(error.message);
      }
      setIsLoading(false);
      setClicked(false);
    }

    getPropertiesFunction();
  }, [])

  return (
    <>
      <PropertyContext.Provider value={properties}>
        <CurrentDataContext.Provider value={currentData}>
          <PropertyDispatchContext.Provider value={dispatch}>
            <LayoutContext.Provider value={layout}>
              <SetLayoutContext.Provider value={setLayout}>
                <LoadingContext.Provider value={isLoading}>
                  <ErrorContext.Provider value={error}>
                    <ClickContext.Provider value={clicked}>
                      <SetClickContext.Provider value={setClicked}>
                        {children}
                      </SetClickContext.Provider>
                    </ClickContext.Provider>
                  </ErrorContext.Provider>
                </LoadingContext.Provider>
              </SetLayoutContext.Provider>
            </LayoutContext.Provider>
          </PropertyDispatchContext.Provider>
        </CurrentDataContext.Provider>
      </PropertyContext.Provider>
    </>
  )
}

export default PropertyProvider