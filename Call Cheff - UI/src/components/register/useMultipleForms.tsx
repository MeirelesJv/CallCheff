import { ReactElement, useState } from "react";

export function UseMultipleForms(steps: ReactElement[]) {

  const [currentStep, setCurrentStep] = useState(0)

  function next() {
    setCurrentStep(i => {
      if (i >= steps.length - 1) {
        return i;
      } else { return i + 1 }
    })
  }
  function back() {
    setCurrentStep(i => {
      if (i <= 0) {
        return i;
      } else { return i - 1 }
    })
  }
  function goTo(index: number) {
    setCurrentStep(index)
  }
  return { goTo, back, next, currentStep, steps, step: steps[currentStep] }
}