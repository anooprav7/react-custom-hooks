import { useState, useCallback } from 'react'

export const useToggle = (inititalValue: boolean = false) => {
  const [boolValue, setBoolValue] = useState<boolean>(inititalValue);

  const toggle = useCallback(() => setBoolValue(state => !state), []);

  return [boolValue, toggle];
}